import React from "react";
import images from "../assets/images.js";
export default function Card() {
  return (
    <div className="bg-gray-50">
      <span className="img">
        <img
          className=" object-contain rounded-sm"
          src={images.CardImage}
          alt=""
        />
      </span>
      <div className="p-3 bg-gray-50">
        <p className="bg-gray-300 p-2 rounded-md w-2/1">
          Python#1 Variable & data type
        </p>
        <div className="flex gap-1 flex-row items-center pt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-bold font-text_primary">13:20</span>
          <div className="w-full h-3 bg-gray-400 rounded-full">
            <div className="bg-blue-600 h-3 rounded-full w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
