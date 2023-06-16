import React from 'react';
import { Fieldset } from 'primereact/fieldset';

const Description = ({ detail }) => {
    return (
        <div className=" flex justify-center w-full fieldsetDetail xl:w-3/4" >
            <Fieldset legend="Description" id='fieldsetDetail' className='flex-grow mx-4 mb-4'>
                <p className="text-black">{detail.description}</p>
            </Fieldset>
        </div>
    )
}

export default Description