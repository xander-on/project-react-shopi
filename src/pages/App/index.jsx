import { BrowserRouter }        from 'react-router-dom';
import { ShopiProvider } from '../../context';
import { AppRoutes }            from '../../router';
import { CheckoutSideMenu, Navbar } from '../../components/';
import './App.css';


export const App = () => {

    return (
        <ShopiProvider>
            <BrowserRouter>
                <AppRoutes/>
                <Navbar />
                <CheckoutSideMenu />
                
            </BrowserRouter>
        </ShopiProvider>
    );
}

