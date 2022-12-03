import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Authenticated from "../middleware/Authenticated";
import Guest from "../middleware/Guest";
import Article from "../views/Article";

import Login from "../views/Auth/Login";
import Profile from "../views/Auth/Profile";
import Register from "../views/Auth/Register";
import Course from "../views/Course";
import Home from "../views/Home";
const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Authenticated>
              <Home />
            </Authenticated>
          }
        />
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
            <Authenticated>
              <Guest>
                <Home />
              </Guest>
            </Authenticated>
          }
        />
        <Route path="/course" element={<Course />} />
        <Route path="/article" element={<Article />} />
        <Route
          path="/account/profile"
          element={
            <Authenticated>
              <Profile />
            </Authenticated>
          }
        />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Router;
