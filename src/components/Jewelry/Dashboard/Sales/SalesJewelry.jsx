
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import Layout from '../../../Layouts/ArtistDashLayout';


const SalesJewelry = () => {

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

    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <Layout>
            <div>
                <h2>My Sales</h2>
            </div>
            <div className="card">
                <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                    <Column field="Item" header="Item"></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column field="CollectionName" header="Collection Name" body={priceBodyTemplate}></Column>
                    <Column field="Price" header="Price"></Column>
                    <Column field="Date" header="Date" body={ratingBodyTemplate}></Column>
                    <Column header="Status" body={statusBodyTemplate}></Column>
                </DataTable>
            </div>
        </Layout>
    );
}

export default SalesJewelry;
