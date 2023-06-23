import React from 'react';
import { FileUpload } from 'primereact/fileupload';
import Layout from '../../../Layouts/ArtistDashLayout';
import FormNewItem from './FormNewItem';
import { useTranslation } from "react-i18next";

function JewelryNewItem() {
  const { t, i18n } = useTranslation(["welcome"]);
  return (
    <Layout main="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl">{t("newItem")}</h2>
      </div>
      <div className="flex flex-col items-center gap-6">
        <p>{t("newItem2")}</p>
        <div className="card text-center">
          <FileUpload
            name="demo[]"
            url="/api/upload"
            emptyTemplate={<p className="m-0">{t("newItem3")}</p>}
            chooseOptions={{ className: 'custom-choose-button' }}
            uploadOptions={{ className: 'custom-upload-button' }}
            cancelOptions={{ className: 'custom-cancel-button' }}
            chooseLabel={t("choose")} // Usar la variable para el nombre del botón de selección
            uploadLabel={t("upload")} // Usar la variable para el nombre del botón de carga
            cancelLabel={t("cancel")}// Usar la variable para el nombre del botón de cancelar
          />
        </div>
        <FormNewItem />
      </div>
      <style>
        {`
            .custom-choose-button,
            .custom-upload-button,
            .custom-cancel-button {
              padding: 5px 10px;
              font-size: 12px;
            }
  
            .custom-choose-button {
              background-color: #6366F1;
            }
  
            .custom-upload-button {
              background-color: #6366F1;
            }
            
            .custom-cancel-button {
              background-color: #6366F1;
            }
          `}
      </style>
    </Layout>
  );
}



export default JewelryNewItem;