import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';

const FormNewItem = () => {

    const types = ["contemporaneo", "moderno"]

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            type: ''
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
                errors.type = "type is required"
            }

            return errors;
        },
        onSubmit: () => {
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
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
                                onChange={(e) => {
                                    formik.setFieldValue('name', e.target.name);
                                }}
                                className={classNames({ 'p-invalid': isFormFieldInvalid('name') })}
                            />
                            <label htmlFor="input_name">Name</label>
                        </span>
                        {getFormErrorMessage('name')}
                    </div>

                    <div>
                        <span className="p-float-label">
                            <InputText
                                id="price"
                                name="price"
                                value={formik.values.price}
                                onChange={(e) => {
                                    formik.setFieldValue('price', e.target.price);
                                }}
                                className={classNames({ 'p-invalid': isFormFieldInvalid('price') })}
                                keyfilter="money"
                            />
                            <label htmlFor="input_value">Name - Surname</label>
                        </span>
                        {getFormErrorMessage('price')}
                    </div>
                </div>

                <div className="flex flex-col">
                    <div>
                        <span className="p-float-label">
                            <Dropdown
                                inputId="type"
                                name="type"
                                value={formik.values.type}
                                options={types}
                                onChange={(e) => {
                                    formik.setFieldValue('type', e.value);
                                }}
                                className="w-full"
                            />
                            <label htmlFor="select_type">Type</label>
                        </span>
                        {getFormErrorMessage('type')}
                    </div>

                    <div>
                        <span className="p-float-label">
                            <InputTextarea
                                inputId="description"
                                name="description"
                                rows={5}
                                cols={30}
                                className={classNames({ 'p-invalid': isFormFieldInvalid('description') }, "w-full")}
                                value={formik.values.description}
                                onChange={(e) => {
                                    formik.setFieldValue('description', e.target.value);
                                }}
                                autoResize
                            />
                            <label htmlFor="description">Description</label>
                        </span>
                        {getFormErrorMessage('description')}
                    </div>
                </div>
            </div>

            <Button type="submit" label="Submit" />
        </form>

    )
}

export default FormNewItem;