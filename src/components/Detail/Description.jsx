import React from 'react';
import { Fieldset } from 'primereact/fieldset';

const Description = ({ detail }) => {
    return (
        <div className="w-full px-44 fieldsetDetail" >
            <Fieldset legend="Description" id='fieldsetDetail'>
                <p className="text-white">{detail.description}</p>
            </Fieldset>
        </div>
    )
}

export default Description