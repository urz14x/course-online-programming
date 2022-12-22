import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { authenticated } from "../../../store";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const redirect = useNavigate();
  const [auth, setAuth] = useRecoilState(authenticated);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState("");
  const MySwal = withReactContent(Swal);
  const credentials = { email, password };
  const login = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/admin/login",
        credentials
      );
      localStorage.setItem("admin-token", response.data.token);
      setAuth({ check: true });
      setEmail("");
      setPassword("");
      redirect("/dashboard");
    } catch (error) {
      setErrors(error.response.data.errors);
      MySwal.fire({
        title: <strong>Email atau password salah</strong>,
        html: <i>Isikan form dengan benar</i>,
        icon: "error",
      });
    }
  };
  return (
    <div className="min-h-screen bg-[#252525] flex justify-center items-center bg-">
      <div className="">
        <header className="mb-3">
          <h1 className="text-3xl font-text_primary font-bold text-[#fff]">
            Admin Login
          </h1>
        </header>
        <form onSubmit={login} className="flex flex-col gap-5">
          <div
            className={`flex items-center bg-[#fff] rounded-md overflow-hidden px-3 ${
              errors.email ? "border-2 border-red-500" : ""
            }`}
          >
            <svg
              className="w-5 h-5 text-red-900"
              viewBox="0 0 26 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 30C26 24.3885 20.3976 19.85 13.5 19.85C6.60245 19.85 1 24.3885 1 30M13.5 15.5C15.4297 15.5 17.2803 14.7362 18.6448 13.3765C20.0093 12.0169 20.7759 10.1728 20.7759 8.25C20.7759 6.32718 20.0093 4.48311 18.6448 3.12348C17.2803 1.76384 15.4297 1 13.5 1C11.5703 1 9.71966 1.76384 8.35516 3.12348C6.99066 4.48311 6.2241 6.32718 6.2241 8.25C6.2241 10.1728 6.99066 12.0169 8.35516 13.3765C9.71966 14.7362 11.5703 15.5 13.5 15.5V15.5Z"
                stroke="#252525"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="email"
              name="email"
              className="w-full h-10 indent-2 focus:outline-none placeholder:italic placeholder:text-[#989898a9]"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div
            className={`flex items-center bg-[#fff] rounded-md overflow-hidden px-3 ${
              errors.email ? "border-2 border-red-500" : ""
            }`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 29 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#252525" />
              <circle cx="4" cy="4" r="4" fill="#252525" />
              <circle cx="4" cy="4" r="4" fill="#252525" />
              <circle cx="15" cy="4" r="4" fill="#252525" />
              <circle cx="15" cy="4" r="4" fill="#252525" />
              <circle cx="15" cy="4" r="4" fill="#252525" />
              <circle cx="25" cy="4" r="4" fill="#252525" />
              <circle cx="25" cy="4" r="4" fill="#252525" />
              <circle cx="25" cy="4" r="4" fill="#252525" />
            </svg>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 indent-2 focus:outline-none placeholder:italic placeholder:text-[#989898a9]"
            />
          </div>
          <button className="bg-[#fff] h-10  text-[#252525] font-text_primary font-bold rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
