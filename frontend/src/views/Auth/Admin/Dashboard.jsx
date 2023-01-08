import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../../../store";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Dashboard({ children }) {
  const redirect = useNavigate();
  const [auth, setAuth] = useRecoilState(authenticated);
  const MySwal = withReactContent(Swal);
  const logout = () => {
    setAuth({ check: false });
    localStorage.removeItem("admin-token");
    redirect("/admin");
    MySwal.fire({
      title: <strong>Logout success</strong>,
      html: <i>Anda berhasil logout</i>,
      icon: "info",
    });
  };
  return (
    <div>
      <aside className="fixed top-0 left-0 h-full w-44 bg-green-600 -translate-x-full sm:translate-x-0 transition-all">
        <header className="flex flex-col justify-center items-center mt-5">
          <img
            className="w-20 text-center"
            src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png"
            alt="Admin Profile"
          />
          <h3 className="text-gray-50 text-2xl font-text_primary">Root</h3>
          <p className="text-gray-50 text-sm font-text_primary">Admin</p>
        </header>
        <nav className="flex flex-col space-y-5 items-center">
          <NavLink
            to="/admin/create-courses"
            className="py-2 px-4 text-white bg-green-700 "
          >
            Create Course
          </NavLink>
          <NavLink
            to="/admin/create-articles"
            className="py-2 px-4 text-white bg-green-700 "
          >
            Create Article
          </NavLink>
          <NavLink
            to="/admin/delete-courses"
            className="py-2 px-4 text-white bg-green-700 "
          >
            Delete Course
          </NavLink>
          <NavLink
            to="/admin/delete-articles"
            className="py-2 px-4 text-white bg-green-700 "
          >
            Delete Article
          </NavLink>
          <NavLink
            to="/admin/edit-course"
            className="py-2 px-4 text-white bg-green-700 "
          >
            Edit Course
          </NavLink>

          <NavLink
            to="/admin/edit-articles"
            className="py-2 px-4 text-white bg-green-700 "
          >
            Edit Article
          </NavLink>
        </nav>
        <footer className="flex items-center justify-center mt-5">
          <button
            onClick={logout}
            className="py-2 px-4 bg-red-800 font-text_primary text-gray-50"
          >
            Logout
          </button>
        </footer>
      </aside>
      {/* Main content */}
      <section className="flex justify-start min-h-screen mt-10 ml-5 sm:ml-64">
        {children}
      </section>
    </div>
  );
}
