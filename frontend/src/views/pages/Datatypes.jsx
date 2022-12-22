import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function Datatypes() {
  return (
    <section className="flex flex-col justify-center items-start min-h-screen p-5">
      <div className="container mx-auto">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="heading"
        >
          Tipe data pada python
        </motion.h1>
        <motion.article
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-body font-text_primary text-gray-700 tracking-tight antialiased">
            Tipe data adalah suatu media atau memori pada komputer yang
            digunakan untuk menampung informasi. Python sendiri mempunyai tipe
            data yang cukup unik bila kita bandingkan dengan bahasa pemrograman
            yang lain.
            <br />
            Berikut beberapa tipe data pada bahasa python :<li>Boolean</li>
            <li>String</li>
            <li>Integer</li>
            <li>List</li>
            <li>Tuple</li>
            <li>Dictionary</li>
          </p>
        </motion.article>
        <div className="mt-5 flex items-center gap-5">
          <NavLink to="/">
            <button className="btn_next flex items-center gap-3 font-text_primary shadow-md overflow-hidden">
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
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </span>
              <span>Kembali</span>
            </button>
          </NavLink>
          <NavLink to="/percabangan">
            <button className="btn_next flex items-center gap-3 font-text_primary shadow-md overflow-hidden">
              <span>Selanjutnya</span>
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
          </NavLink>
        </div>
      </div>
    </section>
  );
}
