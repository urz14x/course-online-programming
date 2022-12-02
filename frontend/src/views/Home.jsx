import React from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Hero from "../assets/images/video-hero.png";
import Card from "../components/Card";
import { authenticated } from "../store";
const Home = () => {
  const [auth, setAuth] = useRecoilState(authenticated);
  useEffect(() => {}, []);
  return (
    <>
      <section className="flex justify-center items-start flex-col sm:items-center lg:flex-row flex-auto mt-10 sm:mt-0 gap-32 sm:gap-80">
        <div className="flex flex-col space-y-3 p-5">
          <span className=" font-text_primary font-bold text-4xl sm:text-5xl md:text-6xl text-[#252525]">
            Watch.
          </span>
          <span className=" font-text_primary font-bold text-3xl sm:text-4xl md:text-5xl text-[#252525]">
            Learn.
          </span>
          <span className=" font-text_primary font-bold text-1xl sm:text-3xl md:text-4xl text-[#252525]">
            Growth.
          </span>
        </div>
        <div>
          <iframe
            className="rounded-md ring-2 ring-red-300"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/b3X0CH98Y9g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <div className="container mx-auto">
        <nav className="p-3" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a href="#" class="ml-1 text-sm font-text_primary md:ml-2 ">
                  Course
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="flex items-center justify-center pb-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
