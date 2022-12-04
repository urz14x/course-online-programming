<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\AdminResource;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AdminLoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
       $request->validate([
            'email' => 'required',
            'password'=> 'required'
       ]);

       $admin = Admin::whereEmail($request->email)->first();
       if(!$admin || !Hash::check($request->password, $admin->password)){
            throw ValidationException::withMessages([
                "Email" => ["The credential are incorrect"]
            ]);
       }
       $admin->tokens()->delete();
       $token = $admin->createToken("admin-tokens")->plainTextToken;

       return (new AdminResource($admin))->additional(compact('token'));
    }
}
