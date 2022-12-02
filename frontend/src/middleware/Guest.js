import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../store";

const Guest = ({ children, data }) => {
  const redirect = useNavigate();
  const [auth, setAuth] = useRecoilState(authenticated);

  useEffect(() => {
    if (auth.check) {
      return redirect("/home");
    }
  }, [auth.check, redirect]);
  return children;
};

export default Guest;
