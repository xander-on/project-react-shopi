import { NavLink } from 'react-router-dom';

export const NavbarItem = ({ dataLink }) => {
    
    const {text, path, extraClass='', underline=true, icon=null, action=null} = dataLink;

    let activeStyle = underline ? 'underline underline-offset-4' : '';

    const activateAction = () => action && action();

    return (
        <li 
            key={text}
            className={ extraClass }
            >
            <NavLink 
                to={path} 
                className={ ({isActive}) => isActive ? activeStyle : ''}
                onClick={ activateAction }
            >   
                <span className='flex items-center'>
                    {icon}
                    <span className='w-1'/>
                    {text}
                </span>
                
            </NavLink>
        </li>
    )
}

