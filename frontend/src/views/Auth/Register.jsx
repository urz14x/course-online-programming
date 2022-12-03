import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const redirect = useNavigate();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");

  let record = {
    first_name,
    last_name,
    username,
    email,
    password,
    password_confirmation,
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("register", record);
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      redirect("/");
    } catch (error) {
      console.log(error.response.data.errors);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <section className=" bg-gray-50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0">
      <div className=" bg-white px-4 py-6 shadow-md rounded-3xl w-full sm:w-auto sm:border-l-[160px] border-primary">
        <h1 className=" px-4 leading-snug antialiased font-bold text-3xl text-gray-600">
          Sign-Up
        </h1>

        {/* Form row */}
        <form onSubmit={handlerSubmit}>
          <div className="pt-8 px-4 flex flex-col sm:flex-row gap-3">
            <div className="form-controls">
              <input
                className={`border-2 focus:bg-blue-50 ${
                  errors.first_name ? `ring-2 ring-red-500` : ""
                }  focus:ring-2 focus-within:ring-blue-400 border-gray-400 h-12 indent-4 focus:outline-none rounded-lg w-full sm:w-auto`}
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={first_name}
                name="firstName"
                id="firstName"
                placeholder="First name"
              />
              <p className="text-sm text-red-500 font-semibold py-1">
                {errors.first_name ? errors.first_name[0] : ""}
              </p>
            </div>
            <div className="form-controls">
              <input
                className={`border-2 focus:bg-blue-50 ${
                  errors.last_name ? `ring-2 ring-red-500` : ""
                }  focus:ring-2 focus-within:ring-blue-400 border-gray-400 h-12 indent-4 focus:outline-none rounded-lg w-full sm:w-auto`}
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
                name="lastName"
                id="lastName"
                placeholder="Last name"
              />
              <p className="text-sm text-red-500 font-semibold py-1">
                {errors.last_name ? errors.last_name[0] : ""}
              </p>
            </div>
          </div>

          {/* Form col */}
          <div className=" py-4 px-4 flex flex-col gap-4">
            <div className="form-controls">
              <input
                className={`border-2 focus:ring-2 ${
                  errors.username ? `ring-2 ring-red-500` : ""
                }  focus:bg-blue-50 focus-within:ring-blue-400 border-gray-400 h-12 w-full indent-4 focus:outline-none rounded-lg`}
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name="Username"
                id="Username"
                placeholder="Username"
              />
              <p className="text-sm text-red-500 font-semibold py-1">
                {errors.username ? errors.username[0] : ""}
              </p>
            </div>
            <div className="form-controls">
              <input
                className={`border-2 focus:ring-2 ${
                  errors.email ? `ring-2 ring-red-500` : ""
                }  focus:bg-blue-50 focus-within:ring-blue-400 border-gray-400 h-12 w-full indent-4 focus:outline-none rounded-lg`}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                id="email"
                placeholder="Email"
              />
              <p className="text-sm text-red-500 font-semibold py-1">
                {errors.email ? errors.email : ""}
              </p>
            </div>
            <div className="form-controls">
              <input
                className={`border-2 focus:ring-2 ${
                  errors.password ? `ring-2 ring-red-500` : ""
                }  focus:bg-blue-50 focus-within:ring-blue-400 border-gray-400 h-12 w-full indent-4 focus:outline-none rounded-lg`}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                id="password"
                placeholder="Password"
              />
              <p className="text-sm text-red-500 font-semibold py-1">
                {errors.password ? errors.password[0] : ""}
              </p>
            </div>

            <div className="form-controls">
              <input
                className="border-2 focus:ring-2 focus:bg-blue-50 focus-within:ring-blue-400 border-gray-400 w-full h-12 indent-4 focus:outline-none rounded-lg"
                type="password"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                value={password_confirmation}
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Password Confirmation"
              />
              <p className="text-sm text-red-500 font-semibold py-1">
                {errors.password_confirmation
                  ? errors.password_confirmation[0]
                  : ""}
              </p>
            </div>
          </div>
          <div className=" px-4 flex flex-col sm:flex-row items-center gap-7">
            <button className="px-10 py-2 bg-primary hover:bg-red-700 text-gray-50 font-semibold rounded-md">
              Sign up
            </button>
            <p>
              Already have an account? Sign-in{" "}
              <Link to="/signin">
                <u>Here</u>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
