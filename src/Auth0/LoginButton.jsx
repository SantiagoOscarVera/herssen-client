import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { getArtistTest } from "../redux/store/user/userSlice";
import { useNavigate, Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();


  
  const handleSubmit = () => {
    //aca hay que cambiar la funcion que se dispachea 
    //cuando esten los usuarios reales
    dispatch(getArtistTest());
    loginWithRedirect()
  };

  return <button
    style={{ backgroundColor: "#065fd4", color: "black" }}
    onClick={handleSubmit}>Login
  </button>;
};

export default LoginButton