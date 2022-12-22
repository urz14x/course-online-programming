import React, { useEffect, useState } from "react";
import Router from "./router";
import "./App.css";
import { useRecoilState } from "recoil";
import { authenticated } from "./store";
import axios from "axios";
function App() {
  const [auth, setAuth] = useRecoilState(authenticated);
  const [mounted, setMounted] = useState(false);

  const getUser = async () => {
    try {
      let response = await axios.get("profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("tokens")}` },
      });
      setAuth({ check: true, user: response.data.data });
    } catch (error) {
      console.log(error);
    }
    setMounted(true);
  };
  const getAdmin = async () => {
    try {
      let response = await axios.get("/admin/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
        },
      });
      setAuth({ check: true, admin: response.data.data });
    } catch (error) {}
    setMounted(true);
  };
  useEffect(() => {
    getUser();
    getAdmin();
  }, [auth.check, mounted]);

  if (!mounted) {
    return <div>Loading...</div>;
  }
  return <Router />;
}

export default App;
