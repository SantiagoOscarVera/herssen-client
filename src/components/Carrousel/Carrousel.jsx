import React, {useState} from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/store/shopping/basketSlices';
import { addFavorite } from '../../redux/store/favorites/favoriteSlice';

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

        const handleFavorite = () => {
            dispatch(addFavorite(product))
        }

        const handleAddBasket = () => {
            dispatch(addItem(product));
        }

        return (
            <Link>
                <div className='flex justify-center p-4'>
                    <div className='flex flex-col duration-300 hover:-translate-y-1 '>
                        <div>
                            <img src={"https://lh3.googleusercontent.com/lSPcRd7JuGf4uJEGIruV_rothudtLMqoWSl3OEFeRe30Ag3429987e4Bcib3ZjfvvLgaVOnz_1zpTXdWWcmyFAgFzd8iQcHVS-VMhqkHhA"} alt={product.name} className="rounded-t-2xl h-40" />
                        </div>
                        <div className='text-black bg-white rounded-b-2xl flex flex-col p-4'>
                            <div className='flex justify-between pb-2 border-b border-gray-300'>
                                <h4 className="font-medium">{product.name}</h4>
                                <h6 className="pr-3">${product.price}</h6>
                            </div>
                            <div className=" flex justify-between pt-2">
                                <Button icon="pi pi-search" size='small'/>
                                <Button icon="pi pi-star-fill" size='small' onClick={handleFavorite} disabled={userData.type !== 'buyer'}/>
                                <Button icon="pi pi-cart-plus" size='small' onClick ={handleAddBasket} disabled={userData.type !== 'buyer'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <div>
            <Carousel value={product} numVisible={6} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} className='p-4' />
        </div>
    )
}

export default Carrousel;