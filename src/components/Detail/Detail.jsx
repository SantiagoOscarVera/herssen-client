import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layouts/BuyerDashLayout';

function Detail() {
    const { id } = useParams();

    
    return (
        <Layout>
            <div>Detail {id}</div>
        </Layout>
    )
}

export default Detail