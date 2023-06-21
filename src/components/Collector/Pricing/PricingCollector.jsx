import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PricingCollector = () => {
  const { t, i18n } = useTranslation(["welcome"]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div >

        <div className="flex flex-col justify-center items-center min-h-screen w-full mx-auto">
          <div className="max-w-7xl px-6 lg:px-8 " style={{ marginTop: "-9%" }}>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl  sm:mt-10 sm:mb-10 lg:mx-0 lg:flex lg:max-w-none">
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-black py-10 text-center ring-1 ring-inset ring-gray-900/5 flex flex-col justify-center py-5">
                  <div className="mx-auto max-w-xs px-8">
                  <h1 className="text-white text-4xl font-bold mb-6">{t("collector2")}</h1> 
                    <p className="text-base font-semibold text-white">{t("mes")}</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-white">500</span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-white">EUR</span>
                    </p>
                    <div className=" ">
                      <div className="mt-8 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-3 text-sky-600">{t("what")}</h4>
                        <div className="h-px flex-auto bg-gray-100"></div>
                      </div>
                      <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-1 sm:gap-3">
                        <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {t("item1")}
                        </li>
                        <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {t("item2")}
                        </li>
                        <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {t("item3")}
                        </li>
                        <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {t("item4")}
                        </li>
                        <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {t("item5")}
                        </li>
                      </ul>
                    </div>
                    <Link  /* onClick={openModal} */  to="/collector/login" className="mt-10 block w-full rounded-md bg-white hover:bg-white hover:text-black px-3 py-2 text-center text-sm font-semibold text-black shadow-sm ">{t("suscribite3")}</Link>
                    <p className="mt-6 text-xs leading-5 text-white flex items-center justify-center gap-x-1">
                    {t("cuenta")}
                      <Link to="/collector/login">
                      <button className="text-black bg-white hover:bg-white hover:text-black rounded-md px-2 py-2 text-xs font-medium">
                      {t("login")}
                      </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div 
            ref={modalRef}
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-center sm:flex sm:items-start">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
              ¡Gracias por realizar el pago!
                </h3>  
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              
                <div className="flex justify-center w-full sm:flex-row">
                <button
                  onClick={closeModal}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
                  <Link to="/collector/form">
                    <button className="mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                      Crear cuenta
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCollector;
