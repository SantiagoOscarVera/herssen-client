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
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const productTemplate = (product) => {


        const handleDetail = () => {
            dispatch(getDetailItem(product.id))
        }

        return (
            <Link to={`/marketplace/${product.id}`} onClick={handleDetail} >
                <div className='flex justify-center p-2 my-3 '>
                    <div className='flex flex-col duration-300 hover:-translate-y-2 relative shadow-lg shadow-gray-300 rounded-xl m-1 hover:shadow-xl'>
                        <img src={"https://i.seadn.io/gcs/files/b56c7ae4f15c3bf3eb9337aa690933a3.png?auto=format&dpr=1&w=1000"} alt={product.name} className='rounded-xl border border-gray-200' />
                        <div className="absolute bottom-0 bg-gray-200 bg-opacity-90 w-full rounded-b-xl text-gray-800 p-3 flex justify-between items-center duration-300 hover:bg-opacity-60">
                            <div>
                                <h2 className='font-medium '>{product.name}</h2>
                                <h4 className=' text-xs'>{product.artist}</h4>
                            </div>
                            <p className='font-medium'>${product.price}USD</p>
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