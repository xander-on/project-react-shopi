import { useContext }      from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShopiContext }    from '../../context';
import './styles.css';


export const NotificationAddCart = () => {

    const context = useContext( ShopiContext );

    return (
        <div 
            className={`${context.lastProductAddToCart ? 'open': 'close'} notification-cart flex justify-center`}>
            <ShoppingBagIcon className='w-5'/>
            <span className='mx-2 product-name'>
                { context.lastProductAddToCart? context.lastProductAddToCart : 'Product'}
            </span> add to cart
        </div>
    );
}
