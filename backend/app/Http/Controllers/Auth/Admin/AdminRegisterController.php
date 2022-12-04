<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;

class AdminRegisterController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $attribute = $request->validate([
            "username" => "required|string|max:30",
            "email" => "required|email|unique:users",
            "password" => "required|min:8|confirmed"
        ]);

        $attribute["password"] = \bcrypt($request->password);
        Admin::create($attribute);
        return response()->json([
            "message" => "Success Register Admin"
        ]);
    }
}
