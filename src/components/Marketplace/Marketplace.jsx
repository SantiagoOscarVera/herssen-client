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
    <Layout> 
      <Filters/>
      <CarrouselContainer/>
    </Layout>
  )
}

export default MarketPlace;