import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../../store";

const Login = () => {
  const redirect = useNavigate();
  let input_password = useRef();

  /*Recoil state*/
  const [auth, setAuth] = useRecoilState(authenticated);

  /*Local state*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  /*Error state*/
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const credentials = { email, password };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("login", credentials);
      localStorage.setItem("tokens", response.data.token);
      setAuth({ check: true });
      setEmail("");
      setPassword("");
      redirect("/home");
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.errors);
      setMessage(error.response.data.message);
    }
  };

  const showPassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    showPassword();
  }, []);
  return (
    <section className=" bg-gray-50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0">
      <div className=" bg-white px-4  shadow-sm rounded-3xl w-full h-[475px] sm:w-auto sm:border-l-[160px] border-primary">
        <h1 className=" py-14 px-4 leading-snug antialiased font-bold text-3xl text-gray-600">
          Sign-In
        </h1>
        <h1 className="px-4 text-red font-semibold text-2xl text-red-500">
          {message ? "Sign-in failed / Incorrect credentials" : ""}
        </h1>

        <form onSubmit={handlerSubmit}>
          {/* Form col */}
          <div className=" py-2 px-4 flex flex-col gap-2">
            <div className="form-controls border-2 border-gray-400 flex items-center p-1 rounded-lg ">
              <label
                id="email"
                className=" text-xl text-gray-500 uil uil-user px-1"
              ></label>
              <input
                className="  indent-2  border-0 w-full sm:w-[370px] h-10 focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <p className="text-sm text-red-500 font-semibold">
              {errors.email ? errors.email[0] : ""}
            </p>
            <div className="form-controls border-2 border-gray-400 flex items-center p-1 rounded-lg ">
              <label
                id="Password"
                className=" text-xl text-gray-500 uil uil-lock px-1"
              ></label>
              <input
                className="  indent-2  border-0 w-full sm:w-[370px] h-10 focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={passwordShown ? "password" : "text"}
                name="password"
                ref={input_password}
                id="password"
                placeholder="Password"
              />

              {passwordShown ? (
                <button type="button" onClick={showPassword}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                </button>
              ) : (
                <button type="button" onClick={showPassword}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              )}
            </div>
            <p className="text-sm text-red-500 font-semibold">
              {errors.password ? errors.password[0] : ""}
            </p>
          </div>

          <div className=" px-4 flex flex-col items-center justify-between w-full space-y-0">
            <button
              type="submit"
              className="px-10 py-2 bg-primary hover:bg-red-700 text-gray-50 font-semibold rounded-lg w-full"
            >
              Sign In
            </button>

            <span className="py-2 font-bold uppercase text-gray-700"> Or</span>
            <p className="py-2">
              No account? Sign-up{" "}
              <NavLink to="/signup">
                <u>Here</u>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
