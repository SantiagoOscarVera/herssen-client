import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Layout from '../Layouts/LayoutCliente';
import PricingArtist from "../Artist/Pricing/PricingArtist";
import PricingJewelry from "../Jewelry/Pricing/PricingJewelry";
import PricingCollector from "../Collector/Pricing/PricingCollector";
import { useTranslation } from "react-i18next";

function Home() {

  const { t, i18n } = useTranslation(["welcome"]);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'auto'; 
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; 
  };

  const [isModalOpenJewelry, setIsModalOpenJewelry] = useState(false);

  const openModalJewelry = () => {
    setIsModalOpenJewelry(true);
    document.body.style.overflow = 'auto'; 
  };

  const closeModalJewelry = () => {
    setIsModalOpenJewelry(false);
    document.body.style.overflow = 'auto'; 
  };

  const [isModalOpenCollector, setIsModalOpenCollector] = useState(false);

  const openModalCollector = () => {
    setIsModalOpenCollector(true);
    document.body.style.overflow = 'auto'; 
  };

  const closeModalCollector = () => {
    setIsModalOpenCollector(false);
    document.body.style.overflow = 'auto'; 
  };

  

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
        closeModalJewelry();
        closeModalCollector()
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://st3.depositphotos.com/2034249/33541/i/450/depositphotos_335410596-stock-photo-black-texture-text-field-space.jpg')", height: "100vh", width: "100%" }}>
      <Layout main="h-full max-w-screen-xl flex m-auto">
        <div >
          <div className="flex items-center h-full justify-center">
            <div className='mb-12'>
              <h2 className="text-7xl sm:text-7xl font-bold mb-12 text-center text-white" style={{ fontWeight: 'lighter', fontFamily: 'Roboto Condensed, sans-serif' }}>{t("title")}</h2>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white" style={{ fontWeight: 'lighter', fontFamily: 'Roboto Condensed, sans-serif' }}>{t("subtitulo")}</h2>
              <div className="flex justify-center">
                <button className="text-4xl text-white mt-10" onClick={scrollToImages}>
                  &#x2193;
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-screen ">

            <div className="grid grid-cols-2 gap-8 " >

              <Link >
                <div
                  className="h-40 w-40 sm:h-60 sm:w-60 relative bg-cover bg-center rounded-lg hover:scale-105 transition-all"
                  style={{ backgroundImage: "url('https://thebluemanakin.com/wp-content/uploads/2022/09/NFT-moda.png')" }}
                  onClick={openModal}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 to-violet-900 opacity-80 rounded-lg"></div>
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white font-bold"
                    style={{
                      fontSize: '1.3em',
                      fontWeight: 'lighter',
                      fontFamily: 'Roboto Condensed, sans-serif'
                    }}
                  >
                    {t("artist")}
                  </span>
                </div>
              </Link>
              <Link to="buyer/code">
                <div
                  className="h-40 w-40 sm:h-60 sm:w-60 relative bg-cover bg-center rounded-lg hover:scale-105 transition-all"
                  style={{ backgroundImage: "url('https://altcoinoracle.com/wp-content/uploads/2022/10/dolce-and-gabbana-dgfamily-nft-community-gallery-02.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 to-violet-900 opacity-80 rounded-lg"></div>
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white font-bold"
                    style={{
                      fontSize: '1.3em',
                      fontWeight: 'lighter',
                      fontFamily: 'Roboto Condensed, sans-serif'
                    }}
                  >
                    {t("buyer")}
                  </span>
                </div>
              </Link>
              <Link >
                <div
                  className="h-40 w-40 sm:h-60 sm:w-60 relative bg-cover bg-center rounded-lg hover:scale-105 transition-all"
                  style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/diamante-abstracto-colorido-91805199.jpg')" }}
                  onClick={openModalJewelry}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 to-violet-900 opacity-80 rounded-lg"></div>
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white font-bold"
                    style={{
                      fontSize: '1.3em',
                      fontWeight: 'lighter',
                      fontFamily: 'Roboto Condensed, sans-serif'
                    }}
                  >
                    {t("joyero")}
                  </span>
                </div>
              </Link>
              <Link>
                <div
                ref={imagesSectionRef}
                  className="h-40 w-40 sm:h-60 sm:w-60 relative bg-cover bg-center rounded-lg hover:scale-105 transition-all"
                  style={{ backgroundImage: "url('https://vulcanpost.com/wp-content/uploads/2022/08/nft-1.jpeg')" }}
                  onClick={openModalCollector}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 to-violet-900 opacity-80 rounded-lg"></div>
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white font-bold"
                    style={{
                      fontSize: '1.01em',
                      fontWeight: 'lighter',
                      fontFamily: 'Roboto Condensed, sans-serif'
                    }}
                  >
                     {t("collector")}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </Layout>
      {/* modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div 
            ref={modalRef}
            className="inline-block align-bottom  rounded-lg text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <PricingArtist/>
            </div>
          </div>
        </div>
      )}
      {isModalOpenJewelry && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div 
            ref={modalRef}
            className="inline-block align-bottom  rounded-lg text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <PricingJewelry/>
            </div>
          </div>
        </div>
      )}
      {isModalOpenCollector && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div 
            ref={modalRef}
            className="inline-block align-bottom  rounded-lg text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <PricingCollector/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
