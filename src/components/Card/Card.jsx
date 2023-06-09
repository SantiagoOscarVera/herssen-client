import React from 'react'

const Card = (product) => {

    const handleFavorite = () => {

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
                            <Button icon="pi pi-search" size='small' />
                            <Button icon="pi pi-star-fill" size='small' onClick={handleFavorite}/>
                            <Button icon="pi pi-cart-plus" size='small' />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};


export default Card