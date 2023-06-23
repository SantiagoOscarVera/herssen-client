import React, { useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { useTranslation } from "react-i18next";

const FormNewItem = () => {
  const { t, i18n } = useTranslation(["welcome"]);
  const types = ["Art1", "Art2"];
  const [automaticSale, setAutomaticSale] = useState("yes");

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      type: "",
      automaticSale: ""
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }
      if (!data.description) {
        errors.description = "Description is required";
      }
      if (!data.price) {
        errors.price = "Price is required";
      }
      if (!data.type) {
        errors.type = "Type is required";
      }

      return errors;
    },
    onSubmit: (values, { resetForm, setFieldValue }) => {
      if (values.newCollection) {
        setCollections((prevCollections) => [
          ...prevCollections,
          values.newCollection
        ]);
        setFieldValue("collection", values.newCollection);
        setFieldValue("newCollection", "");
      }
      resetForm();
    }
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const handleNewCollection = () => {
    if (formik.values.newCollection) {
      setCollections((prevCollections) => [
        ...prevCollections,
        formik.values.newCollection
      ]);
      formik.setFieldValue("collection", formik.values.newCollection);
      formik.setFieldValue("newCollection", "");
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="container p-fluid p-2">
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="name"></label>
            <InputText
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classNames({ "p-invalid": isFormFieldInvalid("name") })}
              placeholder={t("name")}
            />
            {getFormErrorMessage("name")}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="price"></label>
            <InputText
              id="price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classNames({ "p-invalid": isFormFieldInvalid("price") })}
              keyfilter="money"
              placeholder={t("price")}
            />
            {getFormErrorMessage("price")}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="type"></label>
            <Dropdown
              id="type"
              name="type"
              value={formik.values.type}
              options={types}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classNames({ "p-invalid": isFormFieldInvalid("type") })}
              placeholder={t("select")}
            />
            {getFormErrorMessage("type")}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description">{t("description")}</label>
        <InputTextarea
          id="description"
          name="description"
          rows={5}
          cols={51}
          className={classNames({ "p-invalid": isFormFieldInvalid("description") })}
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoResize
          placeholder={t("enter")}
        />
        {getFormErrorMessage("description")}
      </div>

      <div className="form-group">
        <label htmlFor="automaticSale">{t("put")}</label>
        <div className="form-check form-check-inline mt-2">
          <input
            type="radio"
            id="automaticSaleYes"
            name="automaticSale"
            value="yes"
            onChange={(e) => setAutomaticSale(e.target.value)}
            onBlur={formik.handleBlur}
            checked={automaticSale === "yes"}
            className="form-check-input"
          />
          <label htmlFor="automaticSaleYes" className="form-check-label ml-2">
          {t("yes")}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="automaticSaleNo"
            name="automaticSale"
            value="no"
            onChange={(e) => setAutomaticSale(e.target.value)}
            onBlur={formik.handleBlur}
            checked={automaticSale === "no"}
            className="form-check-input"
          />
          <label htmlFor="automaticSaleNo" className="form-check-label ml-2">
          {t("no")}
          </label>
        </div>
      </div>

      <div className="text-center">
        <Button type="submit" label={t("submit")} className="p-button-secondary mt-3 mb-9" />
      </div>
    </form>
  );
};

export default FormNewItem;
