import React from 'react';
import Layout from '../../Layouts/LayoutCliente';

const PricingArtist = () => {
  return (
    <div className="h-screen flex flex-col">
      <Layout main="h-full max-w-screen-xl flex m-auto">
        <div className="flex flex-col justify-center items-center bg-white min-h-screen w-full mx-auto">
          <div className="max-w-7xl px-6 lg:px-8 ">
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 sm:mb-10 lg:mx-0 lg:flex lg:max-w-none">
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 flex flex-col justify-center py-5">
                  <div className="mx-auto max-w-xs px-8">
                  <h1 className="text-4xl font-bold mb-6">Artist</h1> 
                    <p className="text-base font-semibold text-gray-600">Monthly subscription</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                    </p>
                    <div className=" ">
                      <div className="mt-8 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-3 text-indigo-600">What’s included</h4>
                        <div className="h-px flex-auto bg-gray-100"></div>
                      </div>
                      <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-3">
                        <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Access to exclusive buyers 
                        </li>
                        <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Access to NFT Technology
                        </li>
                        <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Fundamentals of NFTs & Blockchain technology
                        </li>
                        <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Art Storage
                        </li>
                        <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Exclusive interviews
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 hover:bg-indigo-500 hover:text-white px-3 py-2 text-center text-sm font-semibold text-white shadow-sm ">Subscribe as an Artist</a>
                    <p className="mt-6 text-xs leading-5 text-gray-600 flex items-center justify-center gap-x-1">
                      Already have an account?
                      <button className="text-white bg-indigo-600 hover:bg-indigo-500 hover:text-white rounded-md px-2 py-2 text-xs font-medium">
                        Login
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PricingArtist;
