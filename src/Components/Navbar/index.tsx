import { NavLink } from "react-router-dom"
import { store } from "../../Common/constants"

const NavItem = ({link, text, className}: { link?: string, text: string, className?: string}) => {
    return (
    <li className={`hover:bg-secondary ${className}`}>
        <NavLink to={link ?? '/'} 
            className={({isActive}) => isActive && text !== store.NAME ? 'underline underline-offset-4' : ''}>
            {text}
        </NavLink>
    </li>)
}

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <NavItem className="font-semibold text-lg" text={store.NAME}/>
                <NavItem text='All'/>
                <NavItem text='Drinks' link='/drinks'/>
                <NavItem text='Food' link='/foods'/>
                <NavItem text='Desserts' link='/desserts'/>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    dpineda93@outlook.com
                </li>
                <NavItem text='My Orders' link='/my-orders'/>
                <NavItem text='My Account' link='/my-account'/>
                <NavItem text='Sign In' link='/sign-in'/>
                <li>
                   Cart: 0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar