import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
/* import { getArtistAsync } from '../../../redux/store/artist/artistSlice'; */

const BuyerCode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    code: '',
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string().required('Se requiere un código'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    /* dispatch(getArtistAsync(values)); */
    navigate("/buyer/login")
    setTimeout(() => {
      (JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://st3.depositphotos.com/2034249/33541/i/450/depositphotos_335410596-stock-photo-black-texture-text-field-space.jpg')", width: "100vw" }}>
    <div className="rounded-xl bg-black px-16 py-3 shadow-lg backdrop-blur-md max-sm:px-8" style={{ /* border: '1px solid gray', */ boxShadow: '0px 0px 5px gray' }}>

        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
          <img
                src="https://media.discordapp.net/attachments/1115030128808964178/1115032798638653442/caballo_preview_rev_1.png"
                alt="Logo"
                style={{ width: '25%', height: '25%', marginBottom: -20, marginTop: -20 }}
                className=""
              />
            <h1 className="mb-2 text-2xl">Herssen</h1>
            <span className="text-gray-300">Enter your private code</span>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4 text-lg">
                <Field
                   className="rounded-3xl border-none bg-slate-200  px-6 py-2 text-center text-gray-900 placeholder-slate-900 shadow-lg outline-none backdrop-blur-md"
                  type="code"
                  name="code"
                  placeholder="Private Code"
                  autoComplete="off"
                />
                <ErrorMessage name="code" component="div" className="text-red-600 text-center" />
              </div>

              <div className="mt-8 flex justify-center text-lg text-black">
              <button
                style={{ border: '1px solid black', boxShadow: '0px 0px 5px gray' }}
                  type="submit"
                  className="rounded-3xl bg-slate-200  px-10 py-2 text-black shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  Enter Code
                </button>
              </div>
              
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default BuyerCode;
