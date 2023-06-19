
import React from 'react'
import { Button } from 'primereact/button'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/store/shopping/basketSlices';
import { addFavorite} from '../../redux/store/favorites/favoriteSlice';
import Swal from 'sweetalert2';
import { useTranslation } from "react-i18next";



const PrimaryInfo = ({ detail }) => {
    const { t, i18n } = useTranslation(["welcome"]);

    const userData = JSON.parse(localStorage.getItem("userData"))
    
    const dispatch = useDispatch();

    const handleFavorite = () => {
        dispatch(addFavorite(detail))
    }

    const handleAddBasket = () => {
        dispatch(addItem(detail));
        /* Swal.fire({
            
            title: 'El item se encuentra en el carrito',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        }); */
    }

    const handleInfo = () => {
        /* dispatch(info(detail)) */
        Swal.fire({
            title: 'Section under construction',
            icon: 'info',
            confirmButtonText: 'Understood'
        });
    }
    

    

    return (
        <div className='gap-10 mt-10 xl:flex'>
            <div className='border border-gray-500 rounded-xl'>
                <img src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/11/15602542206021.jpg" alt={detail.name} className='h-96 rounded-xl' />
            </div>
            <div className='flex flex-col justify-between py-4 gap-4'>

                <div className='flex flex-col gap-2 xl:gap-4'>

                    <h4 className='text-sm text-gray-400 px-1'>{t("item")}</h4>
                    <h1 className='text-3xl font-medium px-1'>{detail.name}</h1>
                    <h2 className='px-1 text-gray-400'>{t("made")} <span className='text-black font font-medium'>{detail.artist}</span></h2>

                    <div className=' px-1 border-b border-gray-300 pb-4'>
                        <p className='text-sm'>{t("categoria")}</p>
                        <p className='text-xl font-medium'>{detail.category}</p>
                    </div>

                    <div className=' px-1'>
                        <p className='text-sm'>{t("currentPrice")} </p>
                        <p className='text-xl font-medium'>{detail.price}€</p>
                    </div>

                </div>
                {
                    userData.type !== "buyer" ? null :
                        <div className="p-buttonset xl:w-72 flex justify-center border-b border-gray-300 pb-4">
                            <Button label="Buy Now" className='w-3/5' size='large'  onClick={handleInfo}/>
                            <Button icon="pi pi-heart" className='w-1/5' onClick={handleFavorite}   size='large'/>
                            <Button icon="pi pi-cart-plus" className='w-1/5' onClick={handleAddBasket} size='large'/>
                        </div>
                }
            </div>
        </div>

    )
}

export default PrimaryInfo

{/* <div className='flex gap-10 mt-10'>
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
</div> */}