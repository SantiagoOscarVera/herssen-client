import React from 'react'
import { Button } from 'primereact/button';
import Layout from '../../Layouts/ArtistDashLayout';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function JewelryDashboard() {

  const { t, i18n } = useTranslation(["welcome"]);

  const ROUTES = {
    item: "/jewelry/dashboard/item",
    collection: "/jewelry/dashboard/collection",
    sales: "/jewelry/dashboard/sales"
  }

  return (
    <Layout>
      <div className='flex  flex-col items-center justify-center' style={{ minHeight: '50vh' }}>
        <h2 className='m-5 text-xl font-medium'>{t("dashboard")}</h2>
        <div className='flex flex-col gap-5 items-center p-5'>

          <Link to={ROUTES.item}>
            <Button name='item' label={t("newItem")} />
          </Link>

          <Link to={ROUTES.collection}>
            <Button name='collection' label={t("collections")}  />
          </Link>

          <Link to={ROUTES.sales}>
            <Button name='sales' label={t("sales")} />
          </Link>
          
        </div>
      </div>
    </Layout>
  )
}

export default JewelryDashboard