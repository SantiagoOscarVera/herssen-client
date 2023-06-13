import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button
    style={{ backgroundColor: "#065fd4", color: "black" }}
    onClick={() => loginWithRedirect()}>Login
  </button>;
};

export default LoginButton