<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::get('/products', [ProductController::class, 'filterProducts']);
Route::get('/products/{id}', [ProductController::class, 'show']);
// Test route
Route::get('/test', [AuthController::class, 'test']);
Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/verify-code', [AuthController::class, 'verifyCode']);
Route::post('/telegram-login', [AuthController::class, 'telegramLogin']);
Route::middleware('auth:sanctum')->group(function () {

    // Get authenticated user info
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Update user profile
    Route::put('/user/update', [UserController::class, 'update']);

    // Logout user
    Route::post('/logout', [AuthController::class, 'logout']);

    // Orders routes
            // Create order
    Route::get('/orders', [OrderController::class, 'index']);           // List all orders
    Route::get('/orders/{id}', [OrderController::class, 'show']);       // Show specific order
    Route::get('/user/orders', [OrderController::class, 'userOrders']); // Orders of authenticated user
});
Route::middleware('auth:sanctum')->post('/orders', [OrderController::class, 'store']);


