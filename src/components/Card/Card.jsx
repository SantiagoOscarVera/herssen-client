import React from 'react'
import { useDispatch } from 'react-redux';
import { getDetailItem } from '../../redux/store/detail/detailSlice';
import { Link } from 'react-router-dom';

const Card = ({id, image, name, artist, price}) => {

    const dispatch = useDispatch();

    const handleDetail = () => {
        dispatch(getDetailItem(id))
    }

    return (
        <Link to={`/marketplace/${id}`} onClick={handleDetail} >
        <div className='flex justify-center p-2 '>
            <div className='flex flex-col duration-300 hover:-translate-y-2 relative shadow-lg shadow-gray-300 rounded-xl m-1 hover:shadow'>
                <img src={image} alt={name} className='rounded-xl border border-gray-200' />
                <div className="absolute bottom-0 bg-gray-200 bg-opacity-90 w-full rounded-b-xl text-gray-800 p-3 flex justify-between items-center duration-300 hover:bg-opacity-60">
                    <div>
                        <h2 className='font-medium '>{name}</h2>
                        <h4 className=' text-xs'>{artist}</h4>
                    </div>
                    <p className='font-medium'>${price}USD</p>
                </div>
            </div>
        </div>
    </Link>
    );
};


export default Card