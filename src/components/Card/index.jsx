import { useContext, useEffect, useState } from "react";
import { ShopiContext } from "../../context";
import { validateImageUrl }    from "../../helpers/";
import { AddToCartButton }       from "../AddToCartButton";

export const Card =  ({ dataItem }) => {

    const {title, images, price} = dataItem;
    const [isValidImage, setIsValidImage] = useState(false);

    const context = useContext(ShopiContext);

    const showProduct = ( productDetail ) => {
        context.closeCheckoutSideMenu();
        context.openProductDetail();
        context.setProductToShow(productDetail);
    }

    useEffect(() => {
        const validateImages = async () => {
            context.setIsLoadingImages(true);
            const validations = await Promise.all(
                images.map((image) => validateImageUrl(image))
            );
        
            // Verificar si al menos una imagen es válida
            const hasValidImage = validations.some((isValid) => isValid);
            setIsValidImage(hasValidImage);
            context.setIsLoadingImages(false);
        };
    
        validateImages();
    }, [images]);

    if (!isValidImage) return null;
    
    return (
        <>
            <div 
                className='bg-white cursor-pointer w-56 rounded-lg border border-gray-300 hover:border-lime-500'
                onClick={()=>showProduct(dataItem)}
            >
                <FigureCard dataItem={dataItem}/>

                <p className='flex justify-between p-2 py-4 items-center'>
                    <span className='text-sm font-light'>{title}</span>
                    <span className='text-lg font-medium'>${price}</span>
                </p>
            </div>

        </>
        
    );
}





const FigureCard = ({ dataItem }) => {

    const {title, images, category} = dataItem;
    const [showImageLoading, setShowImageLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
          setShowImageLoading(false);
        }, 2000);
    
        return () => clearTimeout(timer);
      }, []);

    return (
        <figure className='relative w-full h-60'>
            <span 
                className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'
            >
                {category.name}
            </span>

            {
                showImageLoading 
                    ? <img className={` w-full bg-loading rounded-tl-lg rounded-tr-lg h-60`} />
                    : <img 
                        className='w-full h-full object-cover rounded-tl-lg rounded-tr-lg' 
                        src={images[0]}  alt={title} />
            }

            <AddToCartButton dataItem={dataItem} type={'checkout'}/>
        </figure>
    );
}

