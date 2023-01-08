import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Authenticated from "../middleware/Authenticated";
import Guest from "../middleware/Guest";
import Articles from "../views/Articles";
import AdminLogin from "../views/Auth/Admin/AdminLogin";
import Dashboard from "../views/Auth/Admin/Dashboard";
import Admin from "../middleware/Admin";

import Login from "../views/Auth/Login";
import Profile from "../views/Auth/Profile";
import Register from "../views/Auth/Register";
import Course from "../views/Course";
import Home from "../views/Home";
import Datatypes from "../views/pages/Datatypes";
import Functions from "../views/pages/Functions";
import If from "../views/pages/If";
import Introduction from "../views/pages/Introduction";
import Choose from "../views/pages/Choose";
import CreateCourse from "../views/Auth/Admin/Course/Create";
import CreateArticle from "../views/Auth/Admin/Article/Create";
import DeleteCourse from "../views/Auth/Admin/Course/Delete";
import DeleteArticle from "../views/Auth/Admin/Article/Delete";
import Intro from "../views/pages/Auth/Intro";
import Typedata from "../views/pages/Auth/Typedata";
const Router = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Introduction />} />
        <Route exact path="/tipe-data" element={<Datatypes />} />
        <Route exact path="/percabangan" element={<If />} />
        <Route exact path="/choose" element={<Choose />} />
        <Route
          path="/signin"
          element={
            <Guest>
              <Login />
            </Guest>
          }
        />
        <Route
          path="/signup"
          element={
            <Guest>
              <Register />
            </Guest>
          }
        />
        <Route
          path="/home"
          element={
            <Guest>
              <Navbar />
              <Home />
            </Guest>
          }
        />
        <Route
          path="/course"
          element={
            <Authenticated>
              <Navbar />
              <Course />
            </Authenticated>
          }
        />
        {/* //Menampilkan route article */}
        <Route
          path="/articles"
          element={
            <>
              <Navbar />
              <Sidebar>
                <Intro />
              </Sidebar>
            </>
          }
        />
        {/* //Menampilkan spesifik article */}
        <Route
          path="/articles/bahasa-python"
          element={
            <>
              <Navbar />
              <Sidebar>
                <Intro />
              </Sidebar>
            </>
          }
        />
        <Route
          path="/articles/tipe-data"
          element={
            <>
              <Navbar />
              <Sidebar>
                <Typedata />
              </Sidebar>
            </>
          }
        />
        <Route
          path="/articles/percabangan"
          element={
            <>
              <Navbar />
              <Sidebar>
                <If />
              </Sidebar>
            </>
          }
        />
        <Route
          path="/articles/fungsi"
          element={
            <>
              <Navbar />
              <Sidebar>
                <Functions />
              </Sidebar>
            </>
          }
        />
        <Route
          path="/account/profile"
          element={
            <Authenticated>
              <Navbar />
              <Profile />
            </Authenticated>
          }
        />
        /* Admin Pages*/
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/dashboard"
          element={
            <Admin>
              <Dashboard />
            </Admin>
          }
        />
        <Route
          path="/admin/create-courses"
          element={
            <Dashboard>
              <CreateCourse />
            </Dashboard>
          }
        />
        <Route
          path="/admin/delete-courses"
          element={
            <Dashboard>
              <DeleteCourse />
            </Dashboard>
          }
        />
        <Route
          path="/admin/create-articles"
          element={
            <Dashboard>
              <CreateArticle />
            </Dashboard>
          }
        />
        <Route
          path="/admin/delete-articles"
          element={
            <Dashboard>
              <DeleteArticle />
            </Dashboard>
          }
        />
        <Route
          path="*"
          element={
            <h1 className="grid place-content-center min-h-screen">
              Not Found
            </h1>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
