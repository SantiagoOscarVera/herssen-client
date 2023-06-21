import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDetailItem } from '../../redux/store/detail/detailSlice';

const Carrousel = ({ product }) => {

    const dispatch = useDispatch();
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));

    const responsiveOptions = [
        {
            breakpoint: '1300px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '1600px',
            numVisible: 5,
            numScroll: 3
        },
        {
            breakpoint: '500px',
            numVisible: 1,
            numScroll: 1
        },

    ];


    const productTemplate = (product) => {


        const handleDetail = () => {
            dispatch(getDetailItem(product.id))
        }

        return (
            <Link to={`/marketplace/${product.id}`} onClick={handleDetail} >
                <div className='flex justify-center p-2 my-3 '>
                    <div className='flex flex-col duration-300 hover:-translate-y-2 relative shadow-lg shadow-gray-300 rounded-xl m-1 hover:shadow-xl'>
                        <img  style={{ height: '200px' }} src={"https://st1.uvnimg.com/8d/1f/7e38f1b74e2da6e7d7c94e6c660b/shutterstock-739451422.jpg"} alt={product.name} className='rounded-xl border border-gray-200' />
                        <div className="absolute bottom-0 bg-gray-200 bg-opacity-90 w-full rounded-b-xl text-gray-800 p-3 flex justify-between items-center duration-300 hover:bg-opacity-60">
                            <div>
                                <h2 className='font-medium '>{product.name}</h2>
                                <h4 className=' text-xs'>{product.artist}</h4>
                            </div>
                            <p className='font-medium'>{product.price}€</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <div>
            <Carousel value={product} numVisible={5} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} className='2xl:p-4' />
        </div>
    )
}

export default Carrousel;