import React, { useEffect, useState } from "react";
import Router from "./router";
import "./App.css";
import { useRecoilState } from "recoil";
import { authenticated } from "./store";
import axios from "axios";
import Navbar from "./components/Navbar";
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
  useEffect(() => {
    getUser();
  }, [auth.check, mounted]);

  if (!mounted) {
    return <div>Loading...</div>;
  }
  return <Router />;
}

export default App;
