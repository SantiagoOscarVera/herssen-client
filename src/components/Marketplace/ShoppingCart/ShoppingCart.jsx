import React from "react";
import Layout from '../../Layouts/MarketplaceLayout';
import BasketProduct from './BasketProduct';

function ShoppingCart() {

    return (
        <Layout>
            <div>
                <BasketProduct />
            </div>
        </Layout>
    )
}

export default ShoppingCart;