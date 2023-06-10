import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layouts/BuyerDashLayout';
import { useSelector } from 'react-redux';

function Detail() {
    const { id } = useParams();
    const {detail} = useSelector(state => state.detail);
    console.log(detail);
    return (
        <Layout>
            <div>Detail {id}</div>
        </Layout>
    )
}

export default Detail