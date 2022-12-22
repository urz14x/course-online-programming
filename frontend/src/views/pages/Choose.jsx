import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function Choose() {
  return (
    <section className="flex flex-col justify-center items-start min-h-screen p-5">
      <div className="container mx-auto">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="heading"
        >
          Opss!
        </motion.h1>
        <motion.article
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-body font-text_primary text-gray-700 tracking-tight antialiased">
            Jika anda menyukai/ ingin belajar lebih lanjut tentang bahasa python
            mohon untuk melakukan login / register untuk mendapatkan konten
            tentang bahasa python lebih banyak lagi!
          </p>
        </motion.article>
        <div className="mt-5 flex items-center gap-5">
          <NavLink to="/signin">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn_next flex items-center gap-3 font-text_primary shadow-md overflow-hidden"
            >
              <span>Masuk disini</span>
            </motion.button>
          </NavLink>
          <NavLink to="/signup">
            <button className="btn_next flex items-center gap-3 font-text_primary shadow-md overflow-hidden bg-[#333] text-white ">
              <span>Daftar Disini</span>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
