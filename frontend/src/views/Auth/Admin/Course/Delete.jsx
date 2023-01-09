import React from "react";

import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";
import { useState } from "react";

export default function Delete() {
  const MySwal = withReactContent(Swal);
  const [id, setId] = useState(0);
  const [messages, setMessages] = useState("");
  const deleteCourse = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.delete(
        `http://127.0.0.1:8000/api/admin/course/delete/${id}`
      );
      console.log(response.data);
      setId("");
      MySwal.fire({
        title: <strong>Success Menghapus course</strong>,
        html: <i>Berhasil Menghapus course</i>,
        icon: "info",
      });
    } catch (error) {
      setMessages(error.response.data.message);
      MySwal.fire({
        title: <strong>Gagal Menghapus course</strong>,
        html: <i>Id tidak ditemukan</i>,
        icon: "error",
      });
    }
  };

  return (
    <div className="w-full sm:w-1/2">
      <h1 className="text-3xl font-bold font-text_primary text-gray-800 mb-5">
        Delete Course By ID
      </h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={deleteCourse}
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="Title"
            type="text"
            placeholder="ID Course"
            onChange={(e) => setId(e.target.value)}
            value={id}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete Course
          </button>
        </div>
      </form>
    </div>
  );
}
