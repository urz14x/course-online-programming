import React from "react";
import { useRecoilState } from "recoil";
import { authenticated } from "../../store";

export default function Profile() {
  const [auth, setAuth] = useRecoilState(authenticated);
  return (
    <div className=" min-h-screen container mx-auto px-4">
      <h1 className="font-text_primary text-center text-3xl text-[#252525]">
        Hallo selamat datang{" "}
        <span className="font-bold">
          {auth.user.first_name} {auth.user.last_name}
        </span>
      </h1>
    </div>
  );
}
