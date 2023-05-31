import { useFormik } from "formik";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { useDispatch } from 'react-redux';
import {createPatientAsync  } from '../../redux/store/patient/patientSlice';

const FormPatient = () => {
  const [formData, setFormData] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  const handleFileUpload = (event) => {
    const file = event.currentTarget.files[0];

    setAvatar(URL.createObjectURL(file));
  };
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      accept: false,
      acceptInformation: false,
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Nombres requeridos.";
      }

      if (!data.email) {
        errors.email = "El correo es requerido.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email =
          "Dirección de correo electrónico no válida. P.ej. ejemplo@email.com";
      }

      if (!data.password) {
        errors.password = "Contraseña es requerida.";
      }

      if (!data.confirmPassword) {
        errors.confirmPassword = "Confirmar contraseña es requerido.";
      } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Las contraseñas no coinciden.";
      }

      if (!data.accept) {
        errors.accept = "Tienes que aceptar los términos y condiciones.";
      }

      return errors;
    },
    onSubmit: (data) => {

      // if (data.password !== data.confirmPassword) {
      //   //si no coinciden ver de dejar un mensaje de error o realizar alguna acción
      //   return;
      // }
      setFormData(data);
      setShowMessage(true);
      /* dispatch(createPatientAsync(data)); */
      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  const passwordHeader = <h6>Elige una Contraseña</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Sugerencias</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Al menos una minúscula</li>
        <li>Al menos una mayúscula</li>
        <li>Al menos un número</li>
        <li>Mínimo 8 caracteres</li>
      </ul>
    </React.Fragment>
  );

  return (
    <>
      <div className="min-w-[450px]">
        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
          position="top"
          footer={dialogFooter}
          showHeader={false}
          breakpoints={{ "960px": "80vw" }}
          style={{ width: "40vw" }}
        >
          <div className="flex align-items-center flex-column pt-6 px-3">
            <i
              className="pi pi-check-circle"
              style={{ fontSize: "5rem", color: "var(--green-500)" }}
            ></i>
            <h5>Registro exitoso!</h5>
            <p style={{ lineHeight: 3.5, textIndent: "3rem" }}>
              Su registro se ha Completado <b>{formData.name}</b>{" "}
              <b>{formData.email}</b> ;
            </p>
          </div>
        </Dialog>
  
        {/* diseño form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-6 space-y-6 p-4">
            <>
            <div className="flex flex-col items-center gap-2">
                <label className="block text-3xl leading-6 text-gray-40 ">
                  Foto de Perfil
                </label>
                {avatar ? (
                  <img src={avatar} alt="Avatar" className="h-28 w-28" />
                ) : (
                  <svg
                    className="h-28 w-28 text-gray-300"
                    viewBox="0 0 28 28"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}

                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Subir Foto</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </>
          </div>
          {/* text-qaliLightGrey */}
          <br></br>
          <div className="flex gap-2 p-2">
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className={classNames(
                    "block",
                    "text-3xl",
                    "leading-6",
                    "text-gray-900",
                    "p-4",
                    { "p-error": isFormFieldValid("name") }
                  )}
                >
                  Nombre
                </label>
  
                <InputText
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Nombres"
                  autoComplete="name"
                  className={classNames("w-80", {
                    "p-invalid": isFormFieldValid("name"),
                  })}
                />
                {getFormErrorMessage("name")}
              </div>
            </div>
          </div>
          <br></br>
  
          <div className="flex gap-2 p-2">
            <div className="sm:col-span-3">
              <label className="block  text-3xl leading-6 text-gray-900 p-4">
                Correo electrónico
              </label>
  
              <InputText
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="tucorreoelectronico@gmail.com"
                className="w-80"
              />
              {getFormErrorMessage("email")}
            </div>
          </div>
  
          <br></br>
  
          <div className="flex gap-2 p-2">
  <div className="sm:col-span-3">
    <div className="flex justify-between">
      <div className="mr-12">
        <label
          htmlFor="password"
          className={classNames(
            "block",
            "text-3xl",
            "leading-6",
            "text-gray-900",
            "p-4",
            { "p-error": isFormFieldValid("password") }
          )}
        >
          Contraseña*
        </label>
        <Password
          id="password"
          name="password"
          onChange={formik.handleChange}
          toggleMask
          value={formik.values.password}
          placeholder="***************"
          className={classNames({
            "p-invalid": isFormFieldValid("password"),
          })}
          header={passwordHeader}
          footer={passwordFooter}
        />
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className={classNames(
            "block",
            "text-3xl",
            "leading-6",
            "text-gray-900",
            "p-4",
            { "p-error": isFormFieldValid("confirmPassword") }
          )}
        >
          Confirmar Contraseña*
        </label>
        <Password
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          toggleMask
          value={formik.values.confirmPassword}
          placeholder="***************"
          className={classNames({
            "p-invalid": isFormFieldValid("confirmPassword"),
          })}
          header={passwordHeader}
          footer={passwordFooter}
        />
      </div>
    </div>
  </div>
</div>

  
          <br></br>
  
          <div className="flex gap-2 mb-5 mr-3">
            <Button
              label="Finalizar"
              type="submit"
              size="small"
              className=" border-none bg-qaliGreen ml-auto"
            />
          </div>
        </form>
      </div>
    </>
  );
  
};

export default FormPatient;
