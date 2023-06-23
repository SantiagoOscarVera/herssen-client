import React from 'react'
import Layout from '../../../Layouts/ArtistDashLayout'
import CollectionContainer from './CollectionContainer';
import { useTranslation } from "react-i18next";

function MyCollectionCollector() {

    const { t, i18n } = useTranslation(["welcome"]);

    return (
        <Layout main={"flex flex-col items-center gap-20 mb-4"}>
            <div className='flex justify-center text-2xl'>
                <h2>{t("collections")}</h2>
            </div>
            <CollectionContainer />
        </Layout>
    )
}

export default MyCollectionCollector;