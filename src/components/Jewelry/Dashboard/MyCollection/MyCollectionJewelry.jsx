import React from 'react'
import Layout from '../../../Layouts/ArtistDashLayout'
import CollectionContainer from './CollectionContainer';

function MyCollectionJewelry() {

    return (
        <Layout main={"flex flex-col items-center gap-20 mb-4"}>
            <div className='flex justify-center text-2xl'>
                <h2>My collection</h2>
            </div>
            <CollectionContainer />
        </Layout>
    )
}

export default MyCollectionJewelry;