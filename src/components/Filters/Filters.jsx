import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Filters() {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setActiveLink(0); 
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className='flex justify-center py-5'>
      <div className='flex items-center'>
        <ul className='flex gap-10'>
          <li
            className={`relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100 ${
              activeLink === 0 ? 'before:scale-x-100' : ''
            }`}
          >
            <Link onClick={() => handleLinkClick(0)}>All</Link>
          </li>
          <li
            className={`relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100 ${
              activeLink === 1 ? 'before:scale-x-100' : ''
            }`}
          >
            <Link onClick={() => handleLinkClick(1)}>Contemporary Art</Link>
          </li>
          <li
            className={`relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100 ${
              activeLink === 2 ? 'before:scale-x-100' : ''
            }`}
          >
            <Link onClick={() => handleLinkClick(2)}>Modern Art</Link>
          </li>
          <li
            className={`relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100 ${
              activeLink === 3 ? 'before:scale-x-100' : ''
            }`}
          >
            <Link onClick={() => handleLinkClick(3)}>History Art</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filters;
