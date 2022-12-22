import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export default function Introduction() {
  return (
    <section className="flex flex-col justify-center items-start min-h-screen p-5">
      <div className="container mx-auto">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="heading"
        >
          Apa itu python?
        </motion.h1>
        <motion.article
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-body font-text_primary text-gray-700 tracking-tight antialiased">
            <i>Python</i> Python adalah bahasa pemrograman populer yang dapat
            digunakan untuk berbagai hal, mulai dari membangun website,
            menganalisa data seperti data science, proses scripting, hingga
            pembuatan game. Apa Itu Python? Pengertian, Fungsi dan Contohnya
          </p>
        </motion.article>
        <div className="mt-5">
          <NavLink to="/tipe-data">
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
