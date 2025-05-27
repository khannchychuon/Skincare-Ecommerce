<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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

// Public authentication routes
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
}); 