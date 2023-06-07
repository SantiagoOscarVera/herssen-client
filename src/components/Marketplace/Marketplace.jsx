import React from 'react'
import Filters from '../Filters/Filters';
import Layout from '../Layouts/MarketplaceLayout';
import Carrousel from '../Carrousel/Carrousel';


function MarketPlace() {

/*   const ROUTES = {
    item: "/artist/dashboard/item",
    collection: "/artist/dashboard/collection",
    sales: "/artist/dashboard/sales"
  } */

  return (
    <Layout> 
      <Filters/>
      <Carrousel/>
    </Layout>
  )
}

export default MarketPlace;