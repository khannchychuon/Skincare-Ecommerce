<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
use App\Http\Controllers\Api\ProductController;

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
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
 Route::put('/user/update', [UserController::class, 'update']); // ✅ Add this line for profile update

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::post('/orders', [OrderController::class, 'store']);
   Route::get('/orders', [OrderController::class, 'index']);

    Route::get('/orders/{id}', [OrderController::class, 'show']);
     Route::get('/user/orders', [OrderController::class, 'userOrders']);
});



