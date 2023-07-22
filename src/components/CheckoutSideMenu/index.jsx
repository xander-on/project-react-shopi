import { useContext }          from 'react';
import { Link }                from 'react-router-dom';
import { XMarkIcon }           from '@heroicons/react/24/solid';
import { ShoppingBagIcon }     from '@heroicons/react/24/outline';
import { ShopiContext }        from '../../context';
import { calcTotalPrice }      from '../../helpers/';
import { OrderCard }           from '../OrderCard';
import { root }                from '../../router';
import './styles.css';

export const CheckoutSideMenu = () => {

    const context = useContext( ShopiContext );

    const handleCheckout = () => {
        const orderToAdd = {
            date         : Date.now(),
            products     : context.cartProducts,
            totalPrice   : calcTotalPrice( context.cartProducts)
        }

        context.setOrders([ ...context.orders, orderToAdd ]);
        context.setCartProducts([]);
        context.closeCheckoutSideMenu();
    }

    return (
        <aside 
            className={`${context.checkoutSideMenu ? 'open' : 'close'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Checkout</h2>
                
                <div className='close-checkout-side-menu'>
                    <XMarkIcon 
                        className="h-6 w-6"
                        onClick={ () => context.closeCheckoutSideMenu() }
                    />
                </div>
            </div>
            
            <div className='px-6 overflow-y-scroll'>
            {
                context.cartProducts.length === 0  && (
                    <div className="w-full text-center flex flex-col mt-20 items-center text-gray-600">
                        <ShoppingBagIcon className='w-40'/>
                        <p className="text-2xl">Aun no tienes productos</p>
                    </div>
                )
            }

            {
                context.cartProducts.map( product => 
                    <OrderCard key={ product?.id } product={ product } /> 
                )
            }
                <div className='h-40'></div>
            </div>

            {
                context.cartProducts.length !== 0  && (
                    <div className='px-6 pt-2 pb-6 w-full absolute bottom-0 bg-white border-t border-gray-300'>
                        <p className='flex justify-between items-center'>
                            <span className='font-light'>Total:</span>
                            <span className='font-medium text-xl'>
                                ${calcTotalPrice(context.cartProducts)}
                            </span>
                        </p>

                        <Link to={`${root}/my-orders`} >
                            <button
                                className='bg-lime-500 py-3 mt-3 text-white w-full rounded-lg'
                                onClick={ handleCheckout }
                            >
                                Checkout
                            </button>
                        </Link>
                        
                    </div>
                )
            }

            
            
            
        </aside>
    );
}