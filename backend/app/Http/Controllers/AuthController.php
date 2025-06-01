<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cache;
use App\Models\User;

class AuthController extends Controller
{
    
    // ✅ Register a new user
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|unique:users,phone',
            'password' => 'required|min:6',
            'first_name' => 'required',
            'last_name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'phone' => $request->phone,
            'password' => $request->password, // will be hashed via mutator
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
        ]);

        return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
    }

    // ✅ Login with phone and password
    public function login(Request $request)
{
    $request->validate([
        'phone' => 'required',
        'password' => 'required',
    ]);

    // Normalize phone: remove +855 or non-digits
    $phone = preg_replace('/^\+855/', '', $request->phone);
    $phone = preg_replace('/\D/', '', $phone);

    $user = User::where('phone', $phone)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'Login successful',
        'access_token' => $token,
        'token_type' => 'Bearer',
        'user' => $user,
    ]);
}

    // ✅ Send a 6-digit verification code
    public function forgotPassword(Request $request)
    {
        $request->validate(['phone' => 'required']);

        $code = rand(100000, 999999);
        Cache::put('verify_' . $request->phone, $code, 300); // 5 minutes

        // Simulate sending code via SMS
        return response()->json(['message' => 'Verification code sent', 'code' => $code]);
    }

    // ✅ Verify code sent to user
    public function verifyCode(Request $request)
    {
        $request->validate([
            'phone' => 'required',
            'code' => 'required|numeric',
        ]);

        $cachedCode = Cache::get('verify_' . $request->phone);

        if ($cachedCode != $request->code) {
            return response()->json(['message' => 'Invalid verification code'], 400);
        }

        return response()->json(['message' => 'Code verified']);
    }

    // ✅ Placeholder for Telegram Login
    public function telegramLogin(Request $request)
    {
        return response()->json(['message' => 'Login with Telegram not implemented yet.']);
    }

    // ✅ Get authenticated user
   public function user(Request $request)
{
    return response()->json([
        'user' => $request->user()
    ]);
}


    // ✅ Logout user and revoke tokens
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }
    
}
