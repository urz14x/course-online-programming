import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../store";

const Authenticated = ({ children, data }) => {
  const redirect = useNavigate();
  const [auth, setAuth] = useRecoilState(authenticated);

  useEffect(() => {
    if (!auth.check) {
      return redirect("/article");
    } else if (auth.check) {
      return redirect("/course");
    } else {
      return redirect("/home");
    }
  }, [auth.check, redirect]);
  return children;
};

export default Authenticated;
