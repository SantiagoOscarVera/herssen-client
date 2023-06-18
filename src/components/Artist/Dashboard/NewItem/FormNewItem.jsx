import React, { useState } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';

const FormNewItem = () => {
    const types = ["contemporaneo", "moderno"];
    const [collections, setCollections] = useState(['Collection 1', 'Collection 2', 'Collection 3']);
    const [automaticSale, setAutomaticSale] = useState("yes");

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            type: '',
            collection: '',
            newCollection: '',
            automaticSale: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Name is required.';
            }
            if (!data.description) {
                errors.description = "Description is required"
            }
            if (!data.price) {
                errors.price = "Price is required"
            }
            if (!data.type) {
                errors.type = "Type is required"
            }
            if (!data.collection && !data.newCollection) {
                errors.collection = "Collection is required"
            }

            return errors;
        },
        onSubmit: (values, { resetForm, setFieldValue }) => {
            if (values.newCollection) {
                setCollections(prevCollections => [...prevCollections, values.newCollection]);
                setFieldValue('collection', values.newCollection);
                setFieldValue('newCollection', '');
            }
            resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const handleNewCollection = () => {
        if (formik.values.newCollection) {
            setCollections(prevCollections => [...prevCollections, formik.values.newCollection]);
            formik.setFieldValue('collection', formik.values.newCollection);
            formik.setFieldValue('newCollection', '');
        }
    };

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-1">
            <div className="flex flex-col">
                <div className="flex gap-6">
                    <div>
                        <span className="p-float-label">
                            <InputText
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={classNames({ 'p-invalid': isFormFieldInvalid('name') })}
                                style={{ width: "300px" }}
                            />
                            <label htmlFor="input_name">Name</label>
                        </span>
                        {getFormErrorMessage('name')}
                    </div>
                </div>

                <div>
                    <span className="p-float-label">
                        <InputText
                            id="price"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('price') })}
                            keyfilter="money"
                            style={{ width: "300px" }}
                        />
                        <label htmlFor="input_value">Precio</label>
                    </span>
                    {getFormErrorMessage('price')}
                </div>

                <div className="flex flex-col">
                    <div>
                        <span className="p-float-label">
                            <Dropdown
                                id="type"
                                name="type"
                                value={formik.values.type}
                                options={types}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={classNames({ 'p-invalid': isFormFieldInvalid('type') })}
                                style={{ width: "300px" }}
                            />
                            <label htmlFor="select_type">Type</label>
                        </span>
                        {getFormErrorMessage('type')}
                    </div>

                    <div className="flex">
                        <div className="flex-grow">
                            <span className="p-float-label">
                                <Dropdown
                                    id="collection"
                                    name="collection"
                                    value={formik.values.collection}
                                    options={collections.filter(collection => collection !== '')}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={classNames({ 'p-invalid': isFormFieldInvalid('collection') })}
                                    placeholder="Select or create a collection"
                                    style={{ width: "300px" }}
                                />
                                <label htmlFor="select_collection">Collection</label>
                            </span>
                            {getFormErrorMessage('collection')}
                        </div>
                        <div className="ml-2">
                            <span className="p-float-label">
                                <InputText
                                    id="newCollection"
                                    name="newCollection"
                                    value={formik.values.newCollection}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={classNames({ 'p-invalid': isFormFieldInvalid('newCollection') })}
                                />
                                <label htmlFor="input_newCollection">New Collection</label>
                            </span>
                            {getFormErrorMessage('newCollection')}
                        </div>
                    </div>

                    <div className="flex justify-center mb-4">
                        <Button className="p-button-secondary" type="button" label="Add Collection" onClick={handleNewCollection} />
                    </div>
                </div>

                <div>
                    <span className="p-float-label">
                        <InputTextarea
                            id="description"
                            name="description"
                            rows={5}
                            cols={30}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('description') })}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoResize
                            style={{ width: "100%" }}
                        />
                        <label htmlFor="description">Description</label>
                    </span>
                    {getFormErrorMessage('description')}
                </div>

                <div>
        <label htmlFor="automaticSale">¿Poner a la venta automáticamente?</label>
        <div className="p-formgroup-inline mt-2">
          <div className="p-field-checkbox">
            <input
              type="radio"
              id="automaticSaleYes"
              name="automaticSale"
              value="yes"
              onChange={(e) => setAutomaticSale(e.target.value)}
              onBlur={formik.handleBlur}
              checked={automaticSale === "yes"}
            />
            <label htmlFor="automaticSaleYes" className="p-checkbox-label ml-1">
              Sí
            </label>
          </div>
          <div className="p-field-checkbox">
            <input
              type="radio"
              id="automaticSaleNo"
              name="automaticSale"
              value="no"
              onChange={(e) => setAutomaticSale(e.target.value)}
              onBlur={formik.handleBlur}
              checked={automaticSale === "no"}
            />
            <label htmlFor="automaticSaleNo" className="p-checkbox-label ml-1">
              No
            </label>
          </div>
        </div>
      </div>
            </div>

            <Button type="submit" label="Submit" className="mt-3"/>
        </form>
    );
}

export default FormNewItem;
