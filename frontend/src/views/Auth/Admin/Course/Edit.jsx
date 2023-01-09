import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useState } from "react";

export default function Edit() {
  const [id, setId] = useState("");

  const [title_course, setTitleCourse] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState("");
  const [] = useState();
  const MySwal = withReactContent(Swal);
  const record = {
    id,
    title_course,
    author,
    description,
  };
  const editCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/admin/course/update/${id}`,
        record
      );
      setId("");
      setTitleCourse("");
      setAuthor("");
      setDescription("");
      MySwal.fire({
        title: <strong>Success Mengedit course</strong>,
        html: <i>Berhasil Mengupdate course</i>,
        icon: "success",
      });
    } catch (error) {
      setErrors(error.response.data.errors);
      console.log(error.response.data);
    }
  };
  return (
    <div className="w-full sm:w-1/2">
      <h1 className="text-3xl font-bold font-text_primary text-gray-800 mb-5">
        Edit Course
      </h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={editCourse}
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="id"
            type="text"
            placeholder="Course ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="Title"
            type="text"
            placeholder="Title Course"
            value={title_course}
            onChange={(e) => setTitleCourse(e.target.value)}
          />

          <span className="text-red-700 font-text_primary">
            {errors.title_course ? errors.title_course : ""}
          </span>
        </div>

        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="Author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <span className="text-red-700 font-text_primary">
            {errors.author ? errors.author : ""}
          </span>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="Description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className="text-red-700 font-text_primary">
            {errors.description ? errors.description : ""}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Update Course
          </button>
        </div>
      </form>
    </div>
  );
}
