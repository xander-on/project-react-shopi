import { useContext }      from 'react';
import { NavbarItem }      from '../../components';
import { ShopiContext }    from '../../context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { root } from '../../router';


export const Navbar = () => {
    const context = useContext( ShopiContext );

    const navbarLinksLeft = [
        { text:'Shopi',       path: `${root}`, underline:false, extraClass:'font-semibold text-lg'},
        { text:'Clothes',     path: `${root}/clothes`     },
        { text:'Electronics', path: `${root}/electronics` },
        { text:'Furnitures',  path: `${root}/furnitures`  },
        { text:'Shoes',       path: `${root}/shoes`       },
        { text:'Others',      path: `${root}/others`      },
    ];
    
    const navbarLinksRight = [
        { text:'alex@correo.com',    path: `${root}/shop/my-account`, underline:false, extraClass:'text-black/60'},
        { text:'My Orders',          path: `${root}/my-orders`  },
        { text:'My Account',         path: `${root}/my-account` },
        { text:'Sign In',            path: `${root}/sign-in`    },
        { 
            text  : `${context.cartProducts.length}`,  
            path  : null, underline:false, 
            icon  : <ShoppingBagIcon className='w-5'/>,
            action: context.openCheckoutSideMenu
        },
    ];

    return (
        <nav className='bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                {
                    navbarLinksLeft.map( ( dataLink ) => 
                        <NavbarItem key={dataLink.text} dataLink={dataLink}/> 
                    )
                }
            </ul>

            <ul className='flex items-center gap-3'>
                {
                    navbarLinksRight.map( ( dataLink ) => 
                        <NavbarItem key={dataLink.text} dataLink={dataLink}/> 
                    )
                }
            </ul>
        </nav>
    );
}
