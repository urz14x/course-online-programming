import React from "react";

const Form = () => {
  return (
    <div className="form-controls">
      <input
        className="border-2 border-gray-400 h-12 indent-4 focus:outline-none rounded-lg"
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First name"
      />
    </div>
  );
};

export default Form;
