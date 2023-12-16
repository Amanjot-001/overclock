import '../assets/styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);

    const handleToggleBtn = () => {
        setNavbarOpen((prev) => !prev);
    }

    return (
        <div className="header">
            <div className="logo">
                overClock
            </div>
            <div className="search-bar">
                <input className='header-search' type="text" placeholder='search games' />
            </div>

            <button 
                className='toggle-btn'
                onClick={handleToggleBtn}
            >
                <FontAwesomeIcon icon={!navbarOpen ? faBars : faXmark} />
            </button>

            <div className={`navs ${navbarOpen ? 'show-nav' : ''}`}>
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