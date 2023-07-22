import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { ShopiContext } from "../../context";


export const AddToCartButton = ({ dataItem, type='button' }) => {

    const context = useContext(ShopiContext);

    const isProductInCart = context.cartProducts.filter( 
        product => product.id === dataItem?.id
    ).length > 0;

    const addProductsToCart = ( event ) => {
        event.stopPropagation();

        if (isProductInCart) return; 

        context.setCartProducts([...context.cartProducts, dataItem]);
        context.closeProductDetail();
        context.showNotification(dataItem.title);
    }

    const bgColor = isProductInCart ? 'bg-lime-500' : 'bg-white';


    if( type === 'checkout' )
        return (
            <div 
                className={`${bgColor} absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1`}
                onClick  ={ addProductsToCart }
            >
                {
                    isProductInCart
                        ? <CheckIcon className="h-6 w-6 text-black"/>
                        : <PlusIcon  className="h-6 w-6 text-black"/>
                }
            </div>
        );
    
    if( type === 'button' )
        if (isProductInCart) {
            return (
                <div className="flex justify-center items-center mt-4">
                    <div className="rounded-full bg-lime-500 mr-2 p-1">
                        <CheckIcon className="w-5 text-black"/>
                    </div>
                    <p className="text-lime-500 text-lg">Added to cart</p>            
                </div> 
            ) 
                
        }
            
            
        return(
            <button
                className='bg-lime-500 py-3 mt-3 text-white w-full rounded-lg'
                onClick={ addProductsToCart }
            >
                Add To Cart
            </button>
        );
}
