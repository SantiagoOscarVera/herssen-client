import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';

function BuyerDashNavBar() {

    return (
        <div className='flex justify-between mx-10 py-5'>
            <div className='flex items-center gap-5'>
                <Link to={"/buyer/dashboard"}>
                    <Avatar image="" size="xlarge" shape="circle" />
                </Link>
                <Link to={"/buyer/dashboard"}  >
                    <h2>UserName</h2>
                </Link>
            </div>
            <div className='flex items-center'>
                <ul className='flex gap-2'>
                    <li><Link to={"/marketplace"}>MarketPlace</Link></li>
                    <li><Link to={"/"}>Home</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default BuyerDashNavBar