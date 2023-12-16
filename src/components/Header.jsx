import '../assets/styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);
    const navbarRef = useRef(null);
    const buttonRef = useRef(null);

    const handleToggleBtn = () => {
        setNavbarOpen((prev) => !prev);
    }

    useEffect(() => {
        const handler = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setNavbarOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [navbarOpen]);

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
                ref={buttonRef}
            >
                <FontAwesomeIcon icon={!navbarOpen ? faBars : faXmark} />
            </button>

            <div
                className={`navs ${navbarOpen ? 'show-nav' : ''}`}
                ref={navbarRef}
            >
                <div className="sign-in" onClick={() => setNavbarOpen(false)}>Sign-in</div>
                <div className="curr-path" onClick={() => setNavbarOpen(false)}>My library</div>
                <NavLink to='/cart' className='links' onClick={() => setNavbarOpen(false)}>
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