import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {

    const [showButtons, setShowButtons] = useState(false);
    const menuRef = useRef(null);
    const userData = useSelector(state => state.user);
    const amount = useSelector((store) => store.basket.amount);

    const ROUTES = {
        // aca vamos a enrutar dependiendo de si el usuario es
        // artista o buyer o lo que sea : ROUTES[user.type].dashboard
        // [user.type] vease como el tipo de usuario que estara en el estado global
        // o en el local storage
        artist: {
            dashboard: "/artist/dashboard"
        },
        jewelry: {
            dashboard: "/jewelry/dashboard"
        },
        buyer: {
            dashboard: "/buyer/dashboard"
        }
    }

    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowButtons(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);



    return (
        <div className='flex justify-between mx-10 py-5'>
            <div className="flex items-center ml-2">
                <Link to="/marketplace">
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
            <div className='flex items-center'>
                <ul className='flex gap-10'>
                    
                    <p>
                    <Link to="/marketplace/shopping">
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6 inline-block align-middle'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                            />
                        </svg>
                    </Link>
                        <span className='text-xs align-top bg-indigo-600 text-white rounded-full px-2 py-0 mx-1'>
                            {amount}
                        </span>
                    </p>
                    
                    <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
                        <Link to={"/marketplace"}>Marketplace</Link>
                    </li>
                    <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
                        <Link to={ROUTES[userData.type].dashboard}>Dashboard</Link>
                    </li>

                    <li
                        ref={menuRef}
                        className={`relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100 ${showButtons ? 'bg-indigo-600' : ''}`}
                        onClick={toggleButtons}
                    >
                        <button /* to={"/"} */>Usuario</button>
                        {showButtons && (
                            <div className="absolute left-0 mt-2 py-2 bg-white rounded shadow-lg flex flex-col items-center">
                                {/* Aquí puedes colocar tus botones */}
                                <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-indigo-600 hover:text-white">Perfil</button>
                                {
                                    userData.type === "buyer" ?
                                        <Link to="/buyer/dashboard/favourites">
                                            <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-indigo-600 hover:text-white">Mis Favoritos</button>
                                        </Link> : null
                                }
                                <Link to="/">
                                    <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-indigo-600 hover:text-white">Cerrar Sesion</button>
                                </Link>
                            </div>

                        )}
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default NavBar;
