import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { getJewelryTest } from "../../../redux/store/user/userSlice";
import { useNavigate, Link } from "react-router-dom";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalido').required('Se requiere un email'),
    password: Yup.string().required('Se requiere una contraseña'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    //aca hay que cambiar la funcion que se dispachea 
    //cuando esten los usuarios reales
    dispatch(getJewelryTest());
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      navigate("/jewelry/dashboard")
    }, 400);
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/diamante-abstracto-colorido-91805199.jpg')", width: "100vw" }}>
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-3 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
          <img
                src="https://media.discordapp.net/attachments/1115030128808964178/1115032798638653442/caballo_preview_rev_1.png"
                alt="Logo"
                style={{ width: '25%', height: '25%', marginBottom: -20, marginTop: -20 }}
                className=""
              />
            <h1 className="mb-2 text-2xl">Herssen</h1>
            <span className="text-gray-300">Enter your user data</span>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4 text-lg">
                <Field
                  className="rounded-3xl border-none bg-slate-900 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-center" />
              </div>

              <div className="mb-4 text-lg">
                <Field
                  className="rounded-3xl border-none bg-slate-900 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-center" />
              </div>

              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-slate-900 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-teal-600"
                >
                  Register
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
