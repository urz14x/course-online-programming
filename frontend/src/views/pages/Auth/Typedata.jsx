import React from "react";
import { NavLink } from "react-router-dom";

export default function Typedata() {
  return (
    <div>
      <h1 className="heading">Tipe data Python</h1>
      <p className="content font-text_primary text-gray-800">
        Tipe data adalah suatu media atau memori pada komputer yang digunakan
        untuk menampung informasi. Python sendiri mempunyai tipe data yang cukup
        unik bila kita bandingkan dengan bahasa pemrograman yang lain.
        <br />
        Berikut beberapa tipe data pada bahasa python :<li>Boolean</li>
        <li>String</li>
        <li>Integer</li>
        <li>List</li>
        <li>Tuple</li>
        <li>Dictionary</li>
      </p>

      <ul className=" text-gray-800 antialiased ">
        <li>
          <span className="text-md font-text-primary">
            Matematika: (menyelesaikan permasalahan matematika seperti aljabar,
            kalkulus, dan trigonometri).
          </span>
        </li>
      </ul>
      <button className="btn_next flex items-center gap-3 font-text_primary shadow-md overflow-hidden mt-10">
        <NavLink to="/articles/tipe-data">Selanjutnya</NavLink>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </button>
      {/* <img
        className="w-full h-full py-4 mb-4"
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
        alt="Python"
      /> */}
    </div>
  );
}
