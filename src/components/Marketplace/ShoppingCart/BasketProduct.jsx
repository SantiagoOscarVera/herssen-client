import { useSelector } from 'react-redux';
import Product from './Product';

const BasketProduct = () => {
    const { products, total } = useSelector((store) => store.basket)
    return (
        <div className='max-w-7x1 mx-auto py-4'>
            {products.length > 0 ? (
                <>
                    <div>
                        {products.map((item, i) =>
                            <Product
                                key={new Date().getTime + Math.random} // forma de darle un key dinamico al producto
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                amount={item.amount}
                            />
                        )}
                    </div>


                </>
            ) : (
                <>
                    <p className='text-2x1 text-gray-700 font-medium text-center'>En este momentos no hay productos para mostrar 😢</p>
                </>)}
            <div className='flex flex-row items-center justify-evenly py-8'>
                <p className='text-2x1 font-medium'>Total</p>
                <p className='text-2x1 font-medium'>${total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default BasketProduct;