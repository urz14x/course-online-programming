import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../store";

const Authenticated = ({ children, data }) => {
  const redirect = useNavigate();
  const [auth, setAuth] = useRecoilState(authenticated);

  useEffect(() => {
    if (!auth.check) {
      return redirect("/");
    }
  }, [auth.check, redirect]);
  return children;
};

export default Authenticated;
