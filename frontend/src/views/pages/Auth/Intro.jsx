import React from "react";
import { NavLink } from "react-router-dom";

export default function Intro() {
  return (
    <div>
      <h1 className="heading">Pengenalan Python</h1>
      <p className="content font-text_primary text-gray-800">
        Python Python adalah bahasa pemrograman populer yang dapat digunakan
        untuk berbagai hal, <br></br> mulai dari membangun website, menganalisa
        data seperti data science, proses scripting, <br /> hingga pembuatan
        game.
      </p>
      <p className="content font-text_primary text-gray-800 w-2/3">
        Python bersifat open-source, alias dibuka gratis untuk publik. Ini juga
        artinya ada banyak sekali fitur dan kode buatan kreator yang semakin
        memperluas kapabilitas Python. Semua alasan ini semakin membuat Python
        dicintai oleh komunitas pencinta teknologi. Maka dari itu, tidak heran
        kalau banyak sekali pemula yang mengambil langkah pertamanya untuk
        belajar soal Python. Mungkin Anda pun salah satunya.
      </p>
      <p className="content font-text_primary text-gray-800 w-2/3">
        Belum lengkap rasanya membahas apa itu Python bila tidak menjelaskan
        soal kegunaan dari bahasa pemrograman buatan Guido van Rossum ini.
        Python memiliki endless capabilities, ada banyak sekali hal yang bisa
        Anda lakukan dan ciptakan dengannya. Jika disusun berdasarkan bidang
        pekerjaan, Python bisa membantu industri seperti:
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
