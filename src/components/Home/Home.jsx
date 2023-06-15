import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Layout from '../Layouts/LayoutCliente';

function Home() {
  const scrollToImages = () => {
    scroll.scrollTo(imagesSectionOffsetTop, {
      smooth: true,
      offset: 50 // Ajusta el desplazamiento si es necesario
    });
  };

  const imagesSectionRef = React.useRef(null);
  const [imagesSectionOffsetTop, setImagesSectionOffsetTop] = React.useState(0);

  React.useEffect(() => {
    if (imagesSectionRef.current) {
      setImagesSectionOffsetTop(imagesSectionRef.current.offsetTop);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://st3.depositphotos.com/2034249/33541/i/450/depositphotos_335410596-stock-photo-black-texture-text-field-space.jpg')", height: "100vh" }}>
      <Layout main="h-full max-w-screen-xl flex m-auto">
        <div >
          <div className="flex items-center h-full justify-center">
            <div className='mb-12'>
              <h2 className="text-7xl font-bold mb-12 text-center text-white" style={{ fontWeight: 'lighter', fontFamily: 'Roboto Condensed, sans-serif' }}>Private Marketplace</h2>
              {/* <h2 className="text-3xl font-bold mb-4 text-center text-white" style={{ fontWeight: 'lighter', fontFamily: 'Roboto Condensed, sans-serif' }}>Exclusive art & Jewelry design</h2> */}
              <div className="flex justify-center">
                <button className="text-4xl text-white mt-10" onClick={scrollToImages}>
                  &#x2193;
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-full">

            <div className="grid grid-cols-2 gap-8" ref={imagesSectionRef}>

              <Link to="/artist">
                <div
                  className="h-60 w-60 relative bg-cover bg-center rounded-lg hover:scale-105 transition-all"
                  style={{ backgroundImage: "url('https://thebluemanakin.com/wp-content/uploads/2022/09/NFT-moda.png')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 to-violet-900 opacity-80 rounded-lg"></div>
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
              <Link to="buyer/code">
                <div
                  className="h-60 w-60 relative bg-cover bg-center rounded-lg hover:scale-105 transition-all"
                  style={{ backgroundImage: "url('https://altcoinoracle.com/wp-content/uploads/2022/10/dolce-and-gabbana-dgfamily-nft-community-gallery-02.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 to-violet-900 opacity-80 rounded-lg"></div>
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 to-violet-900 opacity-80 rounded-lg"></div>
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 to-violet-900 opacity-80 rounded-lg"></div>
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
        </div>

      </Layout>
      {/* <div ref={imagesSectionRef}></div> */}
    </div>
  );
}

export default Home;
