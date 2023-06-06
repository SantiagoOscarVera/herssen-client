import React from 'react'
import Filters from '../Filters/Filters';
import Layout from '../Layouts/MarketplaceLayout';


function MarketPlace() {

/*   const ROUTES = {
    item: "/artist/dashboard/item",
    collection: "/artist/dashboard/collection",
    sales: "/artist/dashboard/sales"
  } */

  return (
    <Layout>
      <div>
      <Filters/>
      </div>
    </Layout>
  )
}

export default MarketPlace;