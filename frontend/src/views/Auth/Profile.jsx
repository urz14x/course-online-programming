import React from "react";
import { useRecoilState } from "recoil";
import { authenticated } from "../../store";

export default function Profile() {
  const [auth, setAuth] = useRecoilState(authenticated);
  return (
    <div className=" flex items-center flex-col justify-center min-h-screen container mx-auto px-4 py-10">
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" w-28 h-28 hover:text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </i>
      <h1 className="font-text_primary text-center text-3xl text-[#252525]">
        Hallo selamat datang
      </h1>
      <span className="font-bold text-4xl">
        {auth.user.first_name} {auth.user.last_name}
      </span>
    </div>
  );
}
