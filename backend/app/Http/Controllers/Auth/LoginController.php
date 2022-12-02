<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
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
            "email" => 'required',
            "password" => "required"
        ]);
        $user = User::whereEmail($request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            throw ValidationException::withMessages([
                "Email" => ["The credential are incorrect"]
            ]);
        }
        $user->tokens()->delete();
        $token = $user->createToken("web-token")->plainTextToken;
        // return [
        //     'user' => $user,
        //     'token' => $token->plainTextToken
        // ];

        return (new UserResource($user))->additional(compact('token'));
    }
}
