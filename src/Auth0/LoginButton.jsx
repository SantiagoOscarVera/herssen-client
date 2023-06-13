import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';

const LoginButton = ({handleUser}) => {
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();



  
  const handleSubmit = () => {
    //aca hay que cambiar la funcion que se dispachea 
    //cuando esten los usuarios reales
    dispatch(handleUser());
    loginWithRedirect()
  };

  return <button
    className="rounded-3xl bg-slate-900 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-teal-600"
    onClick={handleSubmit}> 
    Login Auth0
  </button>;
};

export default LoginButton