import React from 'react'
import { Button } from 'primereact/button';
import Layout from '../../Layouts/ArtistDashLayout';
import { Link } from 'react-router-dom';

function ArtistDashboard() {

  const ROUTES = {
    item: "/artist/dashboard/item",
    collection: "/artist/dashboard/collection",
    sales: "/artist/dashboard/sales"
  }

  return (
    <Layout>
      <div className='flex  flex-col items-center justify-center' style={{ minHeight: '50vh' }}>
        <h2 className='m-5 text-xl font-medium'>Dashboard</h2>
        <div className='flex flex-col gap-5 items-center p-5'>

          <Link to={ROUTES.item}>
            <Button name='item' label="Create New Item" />
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

export default ArtistDashboard