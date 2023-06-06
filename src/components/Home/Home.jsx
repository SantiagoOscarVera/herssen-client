import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layouts/LayoutCliente';

function Home() {
  return (
      <div className="h-screen bg-qaliBlue flex flex-col">
        <Layout main="h-full max-w-screen-xl flex m-auto">
          <div className="flex justify-center items-center h-full">
            <div className="flex-2 flex flex-col space-y-2 w-40">
              <Link to="/artist" className="text-white bg-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center">
                Artist
              </Link>
              <Link to="/jewelry" className="text-white bg-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center">
                Jewelry Designer
              </Link>
              <Link to="/collector" className="text-white bg-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center">
                Collector
              </Link>
            </div>
            <div className="flex-2 flex flex-col space-y-2 w-40 ml-4"> 
              <Link to="/buyer/code" className="text-white bg-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center">
                Buyer
              </Link>
            </div>
          </div>
        </Layout>
      </div>
  );
}

export default Home;
