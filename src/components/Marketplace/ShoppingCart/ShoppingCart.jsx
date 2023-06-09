import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Layout from '../../Layouts/MarketplaceLayout';
import BasketProduct from './BasketProduct';
import { updateTotal } from '../../../redux/store/shopping/basketSlices';

function ShoppingCart() {

    const basket = useSelector((store) => store.basket)
    const dispatch = useDispatch();
    console.log(basket);

    // useEffect(() => {
    //     dispatch(updateTotal())
    // }, [products, dispatch])

    return (
        <Layout>
            <div>
                <BasketProduct />
            </div>
        </Layout>
    )
}

export default ShoppingCart;