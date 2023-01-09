<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

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
    public function destroy($id)
    {
        $course_id = Course::find($id);
        // Course::findOrFail($id)->delete($id);
        if (!$course_id) {
            throw ValidationException::withMessages([
                "messages" => ["Id tidak ditemukan"]
            ]);
        }
        Course::find($id)->delete($id);
        return response()->json([
            "messages" => "Berhasil menghapus course"
        ]);
    }
    public function update(Request $request, $id)
    {
        $course_id = Course::find($id);
        $attribute = $request->validate([
            'title_course' => ['required'],
            'author' => ['required'],
            'description' => ['required'],
        ]);
        if (!$course_id) {
            throw ValidationException::withMessages([
                "messages" => ["Id tidak ditemukan"]
            ]);
        }
        $course = Course::where('id', $id)->first();
        $course->update($attribute);
        return response()->json([
            'messages' => 'data berhasil di update'
        ]);
    }
}
