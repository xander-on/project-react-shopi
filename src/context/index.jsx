import { createContext, useState, useEffect } from "react";
import { useFetch } from '../hooks/';

export const ShopiContext = createContext();

export const ShopiProvider = ({ children }) => {

    const [ items, setItems ] = useState(null);
    const [ isLoadingData, setIsLoadingData ]     = useState(true);
    const [ isLoadingImages, setIsLoadingImages ] = useState(true);

    const { data, isLoading } = useFetch('https://api.escuelajs.co/api/v1/products');
    

    useEffect(() => {
        setItems(data);
        setIsLoadingData(isLoading);
    }, [ data, isLoading ]);

    //product detail - open/close
    const [productDetailOpen, setProductDetailOpen] = useState(false);
    const openProductDetail = () => setProductDetailOpen(true);
    const closeProductDetail = () => setProductDetailOpen(false);

    //Checkout Side Menu Open/Close
    const [checkoutSideMenu, setCheckoutSideMenu] = useState(false);
    const openCheckoutSideMenu = () => setCheckoutSideMenu(true);
    const closeCheckoutSideMenu = () => setCheckoutSideMenu(false);

    const [productToShow, setProductToShow] = useState({});

    const [ cartProducts, setCartProducts ] = useState([]);

    const [lastProductAddToCart, setLastProductAddToCart] = useState(null);

    const [orders, setOrders] = useState([]);

    const showNotification = (value) => {
        setLastProductAddToCart(value);
        setTimeout(() => {
            setLastProductAddToCart(null);
        }, 3000);
    }
    

    return(
        <ShopiContext.Provider value={{
            items,
            openProductDetail, closeProductDetail,
            productDetailOpen,
            productToShow, setProductToShow,
            cartProducts, setCartProducts,
            checkoutSideMenu,
            openCheckoutSideMenu,closeCheckoutSideMenu,
            lastProductAddToCart,
            showNotification,
            orders, setOrders,
            isLoadingData, setIsLoadingData,
            isLoadingImages, setIsLoadingImages
        }}>
            {children}           
        </ShopiContext.Provider>
    );
}