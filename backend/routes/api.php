<?php

use App\Http\Controllers\Auth\{RegisterController, LoginController, ProfileController, LogoutController};
use App\Http\Controllers\Auth\Admin\{AdminLoginController, AdminRegisterController, AdminLogoutController, AdminProfile};
use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;

Route::post("/register", RegisterController::class);
Route::post("/login", LoginController::class);
Route::middleware('auth:sanctum')->group(function () {
    Route::get("/profile", ProfileController::class);
    Route::post('/logout', LogoutController::class);
});

//Admin 
Route::post('/admin/register', AdminRegisterController::class);
Route::post('/admin/login', AdminLoginController::class);
Route::middleware('auth:sanctum')->group(function () {
    Route::get("/admin/profile", AdminProfile::class);
    Route::post('/admin/logout', AdminLogoutController::class);
});
Route::get('/admin/course', [CourseController::class, 'index']);
Route::post('/admin/course/create', [CourseController::class, 'store']);
