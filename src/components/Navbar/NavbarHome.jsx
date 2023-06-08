import React from 'react';
import { Link } from 'react-router-dom';

function NavBarHome() {

    return (
        <div className='flex justify-between mx-10 py-5'>
            <div className="flex items-center ml-2">
                <Link to="/">
                    <div className="flex items-center">
                        <img
                            src="https://www.logo.wine/a/logo/Ethereum/Ethereum-Diamond-Logo.wine.svg"
                            alt="Logo"
                            className="h-12 w-16 mr-2"
                        />
                        <span className="text-white text-2xl ">Herssen</span>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default NavBarHome;
