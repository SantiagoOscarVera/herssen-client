import React from "react";
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
/* import { getArtistAsync } from '../../../redux/store/artist/artistSlice'; */

const BuyerCode = () => {
  const dispatch = useDispatch();

  const initialValues = {
    code: '',
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string().required('Se requiere un código'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    /* dispatch(getArtistAsync(values)); */
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://altcoinoracle.com/wp-content/uploads/2022/10/dolce-and-gabbana-dgfamily-nft-community-gallery-02-1024x1024.jpg')", width: "100vw" }}>
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-3 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="https://www.logo.wine/a/logo/Ethereum/Ethereum-Diamond-Logo.wine.svg" width="150" alt="" />
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
                  className="rounded-3xl border-none bg-slate-900 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="code"
                  name="code"
                  placeholder="Private Code"
                  autoComplete="off"
                />
                <ErrorMessage name="code" component="div" className="text-red-600 text-center" />
              </div>

              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-slate-900 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-teal-600"
                >
                  Enter Code
                </button>
              </div>
              <Link to ="/buyer/form" className="mt-8 flex justify-center text-lg text-black">
                <button
                  className="rounded-3xl bg-slate-900 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-teal-600"
                >
                  Form Buyer
                </button>
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default BuyerCode;
