import { useRoutes } from "react-router-dom";
import { 
    Home, 
    MyAccount, 
    MyOrders, 
    NotFound, 
    SignIn, 
    SignOut 
} from "../pages";

export const root = '/shopi';

export const AppRoutes = () => {


    let routes = useRoutes([
        { path:`${root}`,                element:<Home filterCategory={''}            /> },
        { path:`${root}/clothes`,        element:<Home filterCategory={'clothes'}     /> },
        { path:`${root}/electronics`,    element:<Home filterCategory={'electronics'} /> },
        { path:`${root}/furnitures`,     element:<Home filterCategory={'furniture'}   /> },
        { path:`${root}/shoes`,          element:<Home filterCategory={'shoes'}       /> },

        { path:`${root}/my-account`,     element:<MyAccount/> },
        { path:`${root}/my-orders`,      element:<MyOrders/>  },
        { path:`${root}/sign-in`,        element:<SignIn/>    },
        { path:`${root}/sign-out`,       element:<SignOut/>   },
        { path:`${root}/*`,              element:<NotFound/>  },
    ]);

    return routes;
}