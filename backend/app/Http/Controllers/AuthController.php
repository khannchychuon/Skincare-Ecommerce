<?php
namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;


class AuthController extends Controller

{
   public function register(Request $request)
{
    $request->validate([
        'phone' => 'required|unique:users,phone',
        'password' => 'required|min:6',
        'first_name' => 'required|string|max:255',
        'last_name' => 'required|string|max:255',
    ]);

    $user = User::create([
        'phone' => $request->phone,
        'password' => Hash::make($request->password),
        'first_name' => $request->first_name,
        'last_name' => $request->last_name,
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'token' => $token,
        'user' => $user,
    ]);
}

public function login(Request $request)
{
    $request->validate([
        'phone' => 'required',
        'password' => 'required',
    ]);

    $user = User::where('phone', $request->phone)->first();

   

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'token' => $token,
        'user' => $user,
    ]);
}

    public function userProfile(Request $request)
    {
        return response()->json($request->user());
    }
    public function logout(Request $request)
{
    
    $request->user()->currentAccessToken()->delete();

    return response()->json([
        'message' => 'Successfully logged out'
    ]);
}
}