import React, { useState } from 'react'
import Card from '../../../Card/Card';
import { ProductService } from '../../../service/ProductService';

function CollectionContainer() {

    // en este componente se hara la logica para traer las diferentes piezas que se hayan creado 
    const [product, setProduct] = useState(ProductService.getProductsData().slice(0, 15))

    return (
        <div className='flex flex-wrap w-4/6 gap-4 justify-center'>
            {
                product.map(element => <Card
                    id={element.id}
                    name={element.name}
                    image="https://picsum.photos/200/200"
                    artist={element.artist}
                    price={element.price}

                />)
            }
        </div>
    )
}

export default CollectionContainer