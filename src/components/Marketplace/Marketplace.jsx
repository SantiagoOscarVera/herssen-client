import React from 'react'
import Filters from '../Filters/Filters';
import Layout from '../Layouts/MarketplaceLayout';
import CarrouselContainer from './CarrouselContainer/CarrouselContainer';


function MarketPlace() {

  /*   const ROUTES = {
      item: "/artist/dashboard/item",
      collection: "/artist/dashboard/collection",
      sales: "/artist/dashboard/sales"
    } */

  return (
    <Layout main={""}>
      <Filters />
      <section className='flex flex-col'>
        <h2 className='ml-20 text-xl'>Type of Art</h2>
        <CarrouselContainer />
      </section>
      <section>
        <h2 className='ml-20 text-xl'>Type of Art</h2>
        <CarrouselContainer />
      </section>
    </Layout>
  )
}

export default MarketPlace;