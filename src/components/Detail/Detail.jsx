import React from 'react'
import Layout from '../Layouts/BuyerDashLayout';
import { useSelector } from 'react-redux';
import PrimaryInfo from './PrimaryInfo';
import Description from './Description';

function Detail() {
    const { detail } = useSelector(state => state.detail);
    console.log(detail);
    return (
        <Layout main={"max-w-screen-xl flex flex-col items-center justify-center mx-auto gap-10"}>
            <PrimaryInfo detail={detail} />
            <Description detail={detail} />
        </Layout>
    )
}

export default Detail