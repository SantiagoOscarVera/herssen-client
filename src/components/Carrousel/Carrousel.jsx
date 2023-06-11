import React, { useState, useEffect, useRef } from 'react';
import { useEventListener } from 'primereact/hooks';
import { Carousel } from 'primereact/carousel';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDetailItem } from '../../redux/store/detail/detailSlice';

const Carrousel = ({ product }) => {

    const dispatch = useDispatch();
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const productTemplate = (product) => {

        const [hover, setHover] = useState(false);
        const elementRef = useRef(null);

        const classNameHover = 'absolute bottom-0 bg-slate-300 bg-opacity-30 text-opacity-30 tex w-full rounded-b-xl text-slate-700 p-3 flex justify-between items-center';
        const classNameNonHover = 'absolute bottom-0 bg-slate-300 bg-opacity-90 w-full rounded-b-xl text-slate-700 p-3 flex justify-between items-center';

        const [bindMouseEnterListener, unbindMouseEnterListener] = useEventListener({
            target: elementRef,
            type: 'mouseenter',
            listener: () => {
                setHover(true);
            }
        });

        const [bindMouseLeaveListener, unbindMouseLeaveListener] = useEventListener({
            target: elementRef,
            type: 'mouseleave',
            listener: () => {
                setHover(false);
            }
        });

        useEffect(() => {
            bindMouseEnterListener();
            bindMouseLeaveListener();

            return () => {
                unbindMouseEnterListener();
                unbindMouseLeaveListener();
            };
        }, [bindMouseEnterListener, bindMouseLeaveListener, unbindMouseEnterListener, unbindMouseLeaveListener]);


       

        const handleDetail = () => {
            dispatch(getDetailItem(product.id))
        }

        return (
            <Link to={`/marketplace/${product.id}`} onClick={handleDetail} >
                <div className='flex justify-center p-4 ' ref={elementRef}>
                    <div className='flex flex-col duration-300 hover:-translate-y-1 relative'>
                        <img src={"https://i.seadn.io/gcs/files/b56c7ae4f15c3bf3eb9337aa690933a3.png?auto=format&dpr=1&w=1000"} alt={product.name} className='rounded-xl border border-white' />
                        <div className={hover ? classNameHover : classNameNonHover}>
                            <div>
                                <h2 className='font-medium '>{product.name}</h2>
                                <h4 className=' text-xs'>{product.artist}</h4>
                            </div>
                            <p className='font-medium'>{product.price}USD</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <div>
            <Carousel value={product} numVisible={5} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} className='p-4' />
        </div>
    )
}

export default Carrousel;