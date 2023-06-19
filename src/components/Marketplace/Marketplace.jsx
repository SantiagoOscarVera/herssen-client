import React from 'react'
import Filters from '../Filters/Filters';
import Layout from '../Layouts/MarketplaceLayout';
import CarrouselContainer from './CarrouselContainer/CarrouselContainer';
import { useTranslation } from "react-i18next";


function MarketPlace() {
  const { t, i18n } = useTranslation(["welcome"]);
  return (
    <Layout main={""}>
      <Filters />
      <section className='flex flex-col'>
        <h2 className='xl:ml-20 ml-10 text-xl font-medium text-gray-500'>{t("type1")}</h2>
        <CarrouselContainer />
      </section>
      <section>
        <h2 className='xl:ml-20 ml-10 text-xl font-medium text-gray-500'>{t("type2")}</h2>
        <CarrouselContainer />
      </section>
    </Layout>
  )
}

export default MarketPlace;