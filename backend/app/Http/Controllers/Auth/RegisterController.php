<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class RegisterController extends Controller
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
            "first_name" => "required|string",
            "last_name"=> "required|string",
            "username" => "required|string|max:30",
            "email" => "required|email|unique:users",
            "password" => "required|min:8|confirmed"
        ]);
        
        $attribute["password"] = \bcrypt($request->password);
        User::create($attribute);

        return response()->json([
            "messages" => "You are register"
        ]);
    }
}
