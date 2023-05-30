import React from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ArtistDashboard() {
  const navigate = useNavigate()
  return (
    <div className='flex  flex-col items-center justify-center'>
        <h2>Dashboard</h2>
      <div className='flex gap-5 items-center border border-white p-5'>
        <ul>
          <li><Link to={"/artist/dashboard/item"}>hola</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default ArtistDashboard