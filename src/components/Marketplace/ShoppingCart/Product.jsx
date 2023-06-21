import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../redux/store/shopping/basketSlices';
import { useTranslation } from "react-i18next";

const Product = ({ name, amount, image, price, total, id }) => {
    const { t, i18n } = useTranslation(["welcome"]);

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeItem(id))
    }

    return (
        <div className='flex justify-center flex-row items-center gap-8 px-10'>
            <img src={image} alt={name + "glasses"} className="w-40" />
            <div className='w-1/2 px-10'>
                <p className='text-xl font-medium' >{name}</p>
                <p className='text-lg tracking-wide'>{price}€</p>
                <button onClick={handleRemove} className='text-red-500 tracking-wide pt-1 pb-3'>{t("remove")}</button>
            </div>
        </div>
    );
};

export default Product;