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
      <div className='flex flex-col items-center justify-center'>
        <h2 className='m-5 text-xl font-medium'>Dashboard</h2>
        <div className='flex flex-col gap-5 items-center p-5'>

          <Link to={ROUTES.favourites}>
            <Button name='favourites' label='My favourites Items' size='large' />
          </Link>

          <Link to={ROUTES.purchased}>
            <Button name='purchased' label='Purchased Items' size='large'/>
          </Link>
          
        </div>
      </div>
    </Layout>
  )
}

export default BuyerDashboard