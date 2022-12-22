import React from "react";
import { useRecoilState } from "recoil";
import images from "../../assets/images";
import { authenticated } from "../../store";
import Card from "../../components/Card";
export default function Profile() {
  const [auth, setAuth] = useRecoilState(authenticated);
  return (
    <>
      <div className="relative bg-gradient-to-r from-[#ff7777] to-[#dc4747] w-full h-40">
        <div className="mb-3">
          <img
            src={images.Avatar}
            className="rounded-full border-4 border-[#dc4747] p-1 absolute top-20 left-24 shadow-md"
            alt="Account profile"
          />
        </div>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl sm:text-3xl font-bold font-text_primary px-28 mb-1">
          {auth.user.first_name} {auth.user.last_name}
        </h1>
        <p className="px-28 font-text_primary">
          Bandung indonesia <sup>🇮🇩</sup>
        </p>

        <article className="px-28 mt-32">
          <h1 className="text-2xl font-bold font-text_primary mb-6">
            My Progress
          </h1>
          <div className="flex items-center justify-center flex-col md:flex-row gap-3 mb-5">
            <Card
              title="Pytohn #3 Perulangan"
              thumbnail="https://i3.ytimg.com/vi/gxmTFXfrMzk/mqdefault.jpg"
              duration="23:00"
            />
            <Card
              title="Pytohn #2 Percabangan"
              thumbnail="https://i3.ytimg.com/vi/gxmTFXfrMzk/mqdefault.jpg"
              duration="23:00"
            />
            <Card
              title="Pytohn #3 Perulangan"
              thumbnail="https://i3.ytimg.com/vi/gxmTFXfrMzk/mqdefault.jpg"
              duration="23:00"
            />
          </div>
        </article>
      </div>
    </>
  );
}
