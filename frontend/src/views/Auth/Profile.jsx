import React from "react";
import { useRecoilState } from "recoil";
import images from "../../assets/images";
import { authenticated } from "../../store";

export default function Profile() {
  const [auth, setAuth] = useRecoilState(authenticated);
  return (
    <div className=" flex items-center flex-col justify-center min-h-screen container mx-auto px-4 py-10 gap-5">
      <img src={images.Avatar} className="rounded-full" alt="Account profile" />
      <h1 className="font-text_primary text-center text-3xl text-[#252525]">
        Hallo selamat datang
      </h1>
      <span className="font-bold text-4xl">
        {auth.user.first_name} {auth.user.last_name}
      </span>
    </div>
  );
}
