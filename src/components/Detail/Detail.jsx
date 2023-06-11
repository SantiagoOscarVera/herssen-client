import React from 'react'
import Layout from '../Layouts/BuyerDashLayout';
import { useSelector } from 'react-redux';
import PrimaryInfo from './PrimaryInfo';

function Detail() {
    const { detail } = useSelector(state => state.detail);
    console.log(detail);
    return (
        <Layout main={"max-w-screen-xl flex justify-center mx-auto"}>
            <div className='flex gap-10 mt-10'>
                <PrimaryInfo detail={detail} />
            </div>
        </Layout>
    )
}

export default Detail