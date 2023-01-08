import React from "react";

export default function Create() {
  return (
    <div className="w-full sm:w-1/2">
      <h1 className="text-3xl font-bold font-text_primary text-gray-800 mb-5">
        Create Article
      </h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="Title"
            type="text"
            placeholder="Title Course"
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="Auhtor"
            type="text"
            placeholder="Auhtor"
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="Description"
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Create Article
          </button>
        </div>
      </form>
    </div>
  );
}
