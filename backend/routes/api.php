<?php
use App\Http\Controllers\Auth\{RegisterController, LoginController, ProfileController, LogoutController};

Route::post("/register", RegisterController::class);
Route::post("/login", LoginController::class);

Route::middleware('auth:sanctum')->group(function () {
    Route::get("/profile", ProfileController::class);
    Route::post('/logout', LogoutController::class);
});