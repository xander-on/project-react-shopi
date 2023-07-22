import { useContext }       from 'react';
import { XMarkIcon }        from '@heroicons/react/24/solid';
import { ShopiContext }     from '../../context';
import { AddToCartButton }  from '../AddToCartButton';
import './styles.css';


export const ProductDetail = () => {

    const context = useContext( ShopiContext );

    const { images=[], title, price, description } = context.productToShow;

    return (
        <aside 
            className={`${context.productDetailOpen ? 'open' : 'close'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                
                <div className='close-product-detail'>
                    <XMarkIcon 
                        className="h-6 w-6"
                        onClick={ () => context.closeProductDetail() }
                    />
                </div>
            </div>

            <figure className='px-6'>
                <img 
                    className='w-full h-full rounded-lg'
                    src={ images[0] } 
                    alt={ title }
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${price}</span>
                <span className='font-medium text-md'>{title}</span>
                <span className='font-light text-sm'>{description}</span>
            </p>

            <div className='px-6'>
                <AddToCartButton dataItem={context.productToShow} />
            </div>
        </aside>
    );
}


