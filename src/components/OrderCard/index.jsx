import { useContext } from 'react';
import { XMarkIcon }  from '@heroicons/react/24/solid';
import { ShopiContext } from '../../context';

export const OrderCard = ({ product, deleteButton = true }) => {

    const { id, title, images, price } = product;
    const imageUrl = images[0];

    const context = useContext( ShopiContext );

    const handleDelete = () => {
        const filteredProducts = context.cartProducts.filter( product => product.id != id);
        context.setCartProducts( filteredProducts );
    }

    return (
        <div className="flex justify-between items-center mb-4">

            <div className="flex items-center gap-2">
                <figure className='w-16 h-16'>
                    <img 
                        className='w-full h-full rounded-lg object-cover' 
                        src={imageUrl} 
                        alt={title} 
                    />
                </figure>
                <p className='text-sm font-light w-150'>{title}</p>
            </div>

            
                <div className='flex items-center gap-2'>
                    <p className='text-lg font-medium gap-2'>${price}</p>
                    {
                        deleteButton && 
                        <XMarkIcon 
                            className='h-4 w-4 text-black cursor-pointer'
                            onClick={ handleDelete }
                        ></XMarkIcon>
                    }
                </div>
            
            

        </div>
    );
}
