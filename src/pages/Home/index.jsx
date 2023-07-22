import { useContext, useEffect, useState } from "react";
import { ShopiContext } from "../../context";
import { filterItems } from "../../helpers";
import { 
    Card, 
    Layout, 
    ProductDetail, 
    NotificationAddCart, 
    SearchProducts, 
    ListCardSkeleton } from "../../components";

export const Home = ({ filterCategory }) => {

    const context = useContext(ShopiContext);

    const [ searchValue, setSearchValue ] = useState( '' );
    const [ productsByCategory, setProductsByCategory ] = useState([]);
    const [ productsByTitle,    setProductsByTitle ]    = useState([]);

    useEffect(() => {
        setSearchValue('');
        const productsFilteredByCategory = filterItems( context.items, 'category', filterCategory);
        setProductsByCategory( productsFilteredByCategory );
    }, [ context.items, filterCategory ]);


    useEffect(() => {
        let debounceTimer;
        const delay = 2000; // Retardo del debouncer en milisegundos

        const handleSearch = () => {
            const productsFilteredByTitle = filterItems( productsByCategory, 'title', searchValue );
            setProductsByTitle( productsFilteredByTitle );
        };

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(handleSearch, delay);

        return () => clearTimeout(debounceTimer);

    }, [productsByCategory, searchValue]);



    return (
        <Layout>

            {
                <SearchProducts searchValue={searchValue} setSearchValue={ setSearchValue }/>
            }

            <div className="grid gap-6 grid-cols-4">

                {
                    ( context.isLoadingData || context.isLoadingImages ) && <ListCardSkeleton />
                }

                {
                    productsByTitle?.map( (item) => {
                        return <Card key={item.id} dataItem={item}/>
                    })
                }
            </div>

            <ProductDetail />
            <NotificationAddCart />
        </Layout>
    );
}

