<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    //Menampilkan seluruh course
    public function index()
    {
        $courses = DB::table('courses')->get();
        return CourseResource::collection($courses);
    }
    public function store(Request $request)
    {
        $request->validate([
            'title_course' => ['required'],
            'author' => ['required'],
            'description' => ['required'],
        ]);
        DB::table('courses')->insert([
            'title_course' => $request->title_course,
            'author' => $request->author,
            'description' => $request->description,
            'created_at' => now(),
            'updated_at' => now(),

        ]);
        return response()->json([
            "messages" => "Berhasil membuat Course"
        ]);
    }
}
