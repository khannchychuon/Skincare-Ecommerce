<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Admin\Auth\AdminAuthController;
use App\Http\Controllers\Api\AdminProductController;
use App\Http\Controllers\Admin\UserManagementController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
Route::get('/products', [ProductController::class, 'filterProducts']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/test', [AuthController::class, 'test']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::put('/user/update', [UserController::class, 'update']);
    Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
    Route::get('/orders', [OrderController::class, 'index']);           
    Route::get('/orders/{id}', [OrderController::class, 'show']);       
    Route::get('/user/orders', [OrderController::class, 'userOrders']);
});
Route::middleware('auth:sanctum')->post('/orders', [OrderController::class, 'store']);


Route::prefix('admin')->group(function () {
    Route::post('/register', [AdminAuthController::class, 'register']);
    Route::post('/login', [AdminAuthController::class, 'login']);

    Route::middleware(['auth:sanctum', 'is_admin'])->group(function () {
        Route::post('/logout', [AdminAuthController::class, 'logout']);
        Route::get('/profile', [AdminAuthController::class, 'profile']);
        Route::put('/profile-update', [AdminAuthController::class, 'updateProfile']);

         Route::get('/products', [AdminProductController::class, 'index']);
    Route::post('/products', [AdminProductController::class, 'store']);
    Route::put('/products/{id}', [AdminProductController::class, 'update']);
    Route::delete('/products/{id}', [AdminProductController::class, 'destroy']);
  Route::get('/users', [UserManagementController::class, 'index']);
    // Admin order list
    Route::get('/orders', [OrderController::class, 'adminIndex']);
    Route::put('/orders/{orderId}/status', [OrderController::class, 'updateStatus']);


    });
});
