import React from 'react'
import Filters from '../Filters/Filters';
import Layout from '../Layouts/MarketplaceLayout';
import CarrouselContainer from './CarrouselContainer/CarrouselContainer';


function MarketPlace() {

  return (
    <Layout main={""}>
      <Filters />
      <section className='flex flex-col'>
        <h2 className='xl:ml-20 ml-10 text-xl font-medium text-gray-500'>Contemporary Art</h2>
        <CarrouselContainer />
      </section>
      <section>
        <h2 className='xl:ml-20 ml-10 text-xl font-medium text-gray-500'>Modern Art</h2>
        <CarrouselContainer />
      </section>
    </Layout>
  )
}

export default MarketPlace;