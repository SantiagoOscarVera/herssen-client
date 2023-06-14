
import React from 'react'
import { Button } from 'primereact/button'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/store/shopping/basketSlices';
import { addFavorite } from '../../redux/store/favorites/favoriteSlice';

const PrimaryInfo = ({ detail }) => {

    const userData = JSON.parse(localStorage.getItem("userData"))
    console.log(userData);
    const dispatch = useDispatch();

    const handleFavorite = () => {
        dispatch(addFavorite(detail))
    }

    const handleAddBasket = () => {
        dispatch(addItem(detail));
    }

    return (
        <div className='flex gap-10 mt-10'>
            <div className='border border-violet-300 rounded-xl'>
                <img src="https://i.seadn.io/gcs/files/b56c7ae4f15c3bf3eb9337aa690933a3.png?auto=format&dpr=1&w=1000" alt={detail.name} className='h-96 rounded-xl' />
            </div>
            <div className='flex flex-col justify-between py-4'>

                <div className='flex  flex-col gap-4'>

                    <h4 className='text-sm text-violet-300 px-1'>collections name</h4>
                    <h1 className='text-3xl font-medium px-1'>{detail.name}</h1>
                    <h2 className='px-1'>Made by <span className='text-violet-300'>{detail.artist}</span></h2>

                    <div className=' px-1 border-b border-violet-300 pb-4'>
                        <p className='text-sm'>Category</p>
                        <p className='text-xl'>{detail.category}</p>
                    </div>

                    <div className=' px-1'>
                        <p className='text-sm'>Current price </p>
                        <p className='text-xl'>${detail.price} USD</p>
                    </div>

                </div>
                {
                    userData.type !== "buyer" ? null :
                        <div className="p-buttonset w-72 flex justify-center">
                            <Button label="Buy Now" className='w-3/5' />
                            <Button icon="pi pi-heart" className='w-1/5' onClick={handleFavorite} />
                            <Button icon="pi pi-cart-plus" className='w-1/5' onClick={handleAddBasket} />
                        </div>
                }
            </div>
        </div>

    )
}

export default PrimaryInfo