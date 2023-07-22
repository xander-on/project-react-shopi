import { useContext, useState } from "react";
import { ArchiveBoxIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import { ShopiContext } from "../../context";
import { Layout, OrderCard, OrderInfo } from "../../components";


export const MyOrders = () => {

    const context      = useContext(ShopiContext);
    const orderInitial = context.orders?.slice(-1)[0];
    const [orderToShow, setOrderToShow] = useState(orderInitial);

    if(!orderToShow) return (
        <Layout>
            <div className="w-full text-center flex flex-col mt-40 items-center text-gray-600">
                <ArchiveBoxIcon className='w-40'/>
                <p className="text-4xl">Aun no tienes ordenes</p>
            </div>
        </Layout>
    )
    

    const productsOrder = orderToShow.products;

    return (
        <Layout>

            <div className="w-full flex flex-column p-6 pb-0"  >
                
                <div className="w-80">
                    <_OrderHistory 
                        orderToShow   ={orderToShow} 
                        setOrderToShow={setOrderToShow}
                    /> 
                </div>

                <div className="w-1/12"></div>

                <div className="w-4/12">
                    <h2 className="mb-4 text-center text-xl">Details</h2>
                    
                    <OrderInfo order={ orderToShow }/>
                    
                    <h3 className="mt-4 text-lg font-semibold mb-2">
                        ({orderToShow.products.length}) Products: 
                    </h3>
                    {
                        productsOrder.map( product => 
                            <OrderCard 
                                key          = { product.id } 
                                product      = { product }
                                deleteButton = { false }
                            /> 
                        )
                    }
                </div>

            </div>
        </Layout>
    );
}




const _OrderHistory = ({ orderToShow, setOrderToShow }) => {

    const context = useContext(ShopiContext);

    const showOrder = ( date ) => {
        const orderSelected = context.orders.find( order => order.date === date );
        setOrderToShow( orderSelected );
    }

    return (
        <>
            <h2 className="text-center mb-2 text-lg">Orders history</h2>

            <ul className="" >
            { 
                [...context.orders].reverse().map( ( order ) => 
                    <li 
                        key       = { order.date } 
                        className = {` ${ order.date === orderToShow.date ? 'bg-lime-500' : ''} border-b border-lime-500 p-3 cursor-pointer`}
                        onClick   = { () => showOrder(order.date) }
                    >
                        {/* icon */}
                        <div className="flex">
                            <DocumentCheckIcon className="w-6 mr-6"/>
                            <OrderInfo order={ order }/>
                        </div>
                        
                    </li>
                )
            }
            </ul>
        </>
    )
}
