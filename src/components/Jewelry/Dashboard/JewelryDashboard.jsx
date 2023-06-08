import React from 'react'
import { Button } from 'primereact/button';
import Layout from '../../Layouts/ArtistDashLayout';
import { Link } from 'react-router-dom';

function JewelryDashboard() {

  const ROUTES = {
    item: "/jewelry/dashboard/item",
    collection: "/jewelry/dashboard/collection",
    sales: "/jewelry/dashboard/sales"
  }

  return (
    <Layout>
      <div className='flex  flex-col items-center justify-center'>
        <h2>Dashboard</h2>
        <div className='flex gap-5 items-center border border-white p-5'>

          <Link to={ROUTES.item}>
            <Button label="Create New Item" />
          </Link>

          <Link to={ROUTES.collection}>
            <Button name='collection' label='My Collections' />
          </Link>

          <Link to={ROUTES.sales}>
            <Button name='sales' label='My Sales' />
          </Link>
          
        </div>
      </div>
    </Layout>
  )
}

export default JewelryDashboard