import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../store";

const AdminAuth = ({ children, data }) => {
  const redirect = useNavigate();
  const [auth, setAuth] = useRecoilState(authenticated);

  useEffect(() => {
    if (!auth.check) {
      return redirect("/admin");
    }
  }, [auth.check, redirect]);
  return children;
};

export default AdminAuth;
