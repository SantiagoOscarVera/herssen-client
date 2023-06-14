import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layouts/LayoutCliente';

function Home() {
  return (
    <div className="h-screen bg-qaliBlue flex flex-col">
      <Layout main="h-full max-w-screen-xl flex m-auto">
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-2 gap-8">
            <Link to="/artist">
              <div
                className="h-60 w-60 relative bg-cover bg-center rounded-lg hover:scale-105 transition-all"
                style={{ backgroundImage: "url('https://thebluemanakin.com/wp-content/uploads/2022/09/NFT-moda.png')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 to-gray-400 opacity-80 rounded-lg"></div>
                <span
                  className="absolute inset-0 flex items-center justify-center text-white font-bold"
                  style={{
                    fontSize: '1.5em',
                    fontWeight: 'lighter',
                    fontFamily: 'Roboto Condensed, sans-serif'
                  }}
                >
                  ARTIST
                </span>
              </div>
            </Link>
            <Link to="buyer">
              <div
                className="h-60 w-60 relative bg-cover bg-center rounded-lg hover:scale-105 transition-all"
                style={{ backgroundImage: "url('https://altcoinoracle.com/wp-content/uploads/2022/10/dolce-and-gabbana-dgfamily-nft-community-gallery-02.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 to-gray-400 opacity-80 rounded-lg"></div>
                <span
                  className="absolute inset-0 flex items-center justify-center text-white font-bold"
                  style={{
                    fontSize: '1.5em',
                    fontWeight: 'lighter',
                    fontFamily: 'Roboto Condensed, sans-serif'
                  }}
                >
                  BUYER
                </span>
              </div>
            </Link>
            <Link to="/jewelry">
              <div
                className="h-60 w-60 relative bg-cover bg-center rounded-lg hover:scale-105 transition-all"
                style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/diamante-abstracto-colorido-91805199.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 to-gray-400 opacity-80 rounded-lg"></div>
                <span
                  className="absolute inset-0 flex items-center justify-center text-white font-bold"
                  style={{
                    fontSize: '1.5em',
                    fontWeight: 'lighter',
                    fontFamily: 'Roboto Condensed, sans-serif'
                  }}
                >
                  JEWELRY
                </span>
              </div>
            </Link>
            <Link to="/collector">
              <div
                className="h-60 w-60 relative bg-cover bg-center rounded-lg hover:scale-105 transition-all"
                style={{ backgroundImage: "url('https://vulcanpost.com/wp-content/uploads/2022/08/nft-1.jpeg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 to-gray-400 opacity-80 rounded-lg"></div>
                <span
                  className="absolute inset-0 flex items-center justify-center text-white font-bold"
                  style={{
                    fontSize: '1.5em',
                    fontWeight: 'lighter',
                    fontFamily: 'Roboto Condensed, sans-serif'
                  }}
                >
                  COLLECTOR
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
