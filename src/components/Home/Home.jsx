import React, { useState } from 'react';
import Layout from '../Layouts/LayoutCliente';

function Home() {
  return (
    <div className="h-screen bg-qaliBlue flex flex-col">
      <Layout main="h-full max-w-screen-xl flex m-auto">
        <div className="flex justify-center items-center h-full">
          <div className="flex-2 flex flex-col space-y-2 w-40">
            <button className="text-white bg-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Artist
            </button>
            <button className="text-white bg-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Jewelry Designer
            </button>
            <button className="text-white bg-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Collector
            </button>
          </div>
          <div className="flex-2 flex flex-col space-y-2 w-40 ml-4"> {/* Se agregó ml-4 para establecer un margen izquierdo */}
            <button className="text-white bg-neutral-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Buyer
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
