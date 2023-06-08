import React from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';

const Carrousel = ({ product }) => {

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

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const productTemplate = (product) => {
        return (
            <div className='flex justify-center hover:-translate-y-1'>
                <div className='flex flex-col'>
                    <div>
                        <img src={"https://lh3.googleusercontent.com/lSPcRd7JuGf4uJEGIruV_rothudtLMqoWSl3OEFeRe30Ag3429987e4Bcib3ZjfvvLgaVOnz_1zpTXdWWcmyFAgFzd8iQcHVS-VMhqkHhA"} alt={product.name} className="rounded-t-2xl h-40" />
                    </div>
                    <div className='text-black bg-white rounded-b-2xl flex flex-col p-4'>
                        <div>
                            <h4 className="">{product.name}</h4>
                        </div>
                        <h6 className="">${product.price}</h6>
                        {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
                        <div className=" flex justify-evenly">
                            <Button icon="pi pi-search" size='small' />
                            <Button icon="pi pi-star-fill" size='small' />
                            <Button icon="pi pi-cart-plus" size='small' />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="carousel">
            <Carousel value={product} numVisible={6} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} className='p-4'/>
        </div>
    )
}

export default Carrousel;