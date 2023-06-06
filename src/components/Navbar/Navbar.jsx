import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {

    const [showButtons, setShowButtons] = useState(false);
    const menuRef = useRef(null);
    const userData = useSelector(state => state.user);

    const ROUTES = {
        // aca vamos a enrutar dependiendo de si el usuario es
        // artista o buyer o lo que sea : ROUTES[user.type].dashboard
        // [user.type] vease como el tipo de usuario que estara en el estado global
        // o en el local storage
        artist: {
            dashboard: "/artist/dashboard"
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
