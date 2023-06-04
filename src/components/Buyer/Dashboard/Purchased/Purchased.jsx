
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import Layout from '../../../Layouts/ArtistDashLayout';


const Purchased = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // en el ejemplo de Prime aca se genera el fetch y lo setea en products
        // de todas formas puede ser cambiado por un estado de redux o algune stado global
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (product) => {
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="w-6rem shadow-2 border-round" />;
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };


    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Purchased Items</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <Layout>
            <div>
                <h2>Purchased Items</h2>
            </div>
            <div className="card">
                <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                    <Column field="Item" header="Item"></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column field="Artist" header="Artist"></Column>
                    <Column field="CollectionName" header="Collection Name" body={priceBodyTemplate}></Column>
                    <Column field="Rating" header="Rating" body={ratingBodyTemplate}></Column>
                    <Column field="Price" header="Price"></Column>
                </DataTable>
            </div>
        </Layout>
    );
}

export default Purchased;
