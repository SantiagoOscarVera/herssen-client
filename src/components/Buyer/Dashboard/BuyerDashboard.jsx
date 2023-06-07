import React from 'react'
import { Button } from 'primereact/button';
import Layout from '../../Layouts/BuyerDashLayout';
import { Link } from 'react-router-dom';

function BuyerDashboard() {

  const ROUTES = {
    favourites: "/buyer/dashboard/favourites",
    purchased: "/buyer/dashboard/purchased"
  }

  return (
    <Layout>
      <div className='flex  flex-col items-center justify-center'>
        <h2>Dashboard</h2>
        <div className='flex gap-5 items-center border border-white p-5'>

          <Link to={ROUTES.favourites}>
            <Button name='favourites' label='My favourites Items' />
          </Link>

          <Link to={ROUTES.purchased}>
            <Button name='purchased' label='Purchased Items' />
          </Link>
          
        </div>
      </div>
    </Layout>
  )
}

export default BuyerDashboard