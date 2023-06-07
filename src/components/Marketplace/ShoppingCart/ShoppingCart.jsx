import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Layout from '../../Layouts/MarketplaceLayout';
import BasketProduct from './BasketProduct';
import { updateTotal } from '../../../redux/store/shopping/basketSlices';

function ShoppingCart() {

    const { products } = useSelector((store) => store.basket)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateTotal())
    }, [products, dispatch])

    return (
        <Layout>
            <div>
                <BasketProduct />
            </div>
        </Layout>
    )
}

export default ShoppingCart;