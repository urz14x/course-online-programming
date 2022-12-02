import React from "react";

const Popup = () => {
  return (
    <div className="modal fixed top-0 left-0 right-0 bottom-0 -z-10 flex justify-center items-center opacity-100">
      <div className="modal-inner">
        <h2 className="text-2xl text-red-500">Password not match</h2>
      </div>
    </div>
  );
};

export default Popup;
