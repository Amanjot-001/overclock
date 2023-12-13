import '../assets/styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return (
        <div className="header">
            <div className="logo">
                overClock
            </div>
            <div className="search-bar">
                <input className='header-search' type="text" placeholder='search games' />
            </div>
            <div className="navs">
                <div className="sign-in">Sign-in</div>
                <div className="curr-path">My library</div>
                <NavLink to='/cart' className='links'>
                    <div className="cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                        ({cartItems.length})
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;