
import React from 'react'
import CardCollection from './CardCollection';

function CollectionContainer() {

    // en este componente se hara la logica para traer las diferentes piezas que se hayan creado 

    const array = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7];

    return (
        <div className='flex flex-wrap w-4/6 gap-4 justify-center'>
            {
                array.map(element => <CardCollection
                    
                />)
            }
        </div>
    )
}

export default CollectionContainer