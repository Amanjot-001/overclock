import '../assets/styles/sideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import Navbtn from './NavBtn';
import GenreBtn from './GenreBtn';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const SideNav = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef();
    const buttonRef = useRef();

    const handleSidebarToggle = () => {
        setSidebarOpen((prev) => !prev);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    useEffect(() => {
        const handler = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [sidebarOpen]);

    return (
        <div className="sideNav">
            <button
                className='side-toggle'
                onClick={handleSidebarToggle}
                ref={buttonRef}
            >
                <FontAwesomeIcon icon={!sidebarOpen ? faAnglesRight : faAnglesLeft} />
            </button>
            <div
                className={`sidenav-content ${sidebarOpen ? 'show-bar' : ''}`}
                ref={sidebarRef}
            >
                <div className="top-items">
                    <NavLink className='links' to="/" onClick={closeSidebar}>
                        <div className="home">
                            Home
                        </div>
                    </NavLink>
                    {/* <NavLink className='links' to="/reviews" onClick={closeSidebar}> */}
                    <div className="reviews" onClick={closeSidebar}>
                        Reviews
                    </div>
                    {/* </NavLink> */}
                    <NavLink className='links' to="/profile" onClick={closeSidebar}>
                        <div className="profile">
                            <p>Amanjot</p>
                            <div className="user-initial">A</div>
                        </div>
                    </NavLink>
                </div>
                <div className="user-list">
                    <NavLink className='links' to="/discover/wishlist" onClick={closeSidebar}>
                        <Navbtn icon={'faGift'} title={'Wishlist'} />
                    </NavLink>
                    <NavLink className='links' to="/my-library" onClick={closeSidebar}>
                        <Navbtn icon={'faLayerGroup'} title={'My library'} />
                    </NavLink>
                </div>
                <div className="new-releases">
                    <p>New Releases</p>
                    <NavLink className='links' to="/discover/last-30-days" onClick={closeSidebar}>
                        <Navbtn icon={'faStar'} title={'Last 30 days'} />
                    </NavLink>
                    <NavLink className='links' to="/discover/this-week" onClick={closeSidebar}>
                        <Navbtn icon={'faFire'} title={'This week'} />
                    </NavLink>
                    <NavLink className='links' to="/discover/next-week" onClick={closeSidebar}>
                        <Navbtn icon={'faForwardFast'} title={'Next week'} />
                    </NavLink>
                    <Navbtn icon={'faCalendarDays'} title={'Release calender'} onClick={closeSidebar}/>
                </div>
                <div className="top">
                    <p>Top</p>
                    <NavLink className='links' to="/discover/best-of-the-year" onClick={closeSidebar}>
                        <Navbtn icon={'faTrophy'} title={'Best of the year'} />
                    </NavLink>
                    <NavLink className='links' to="/discover/popular-in-2022" onClick={closeSidebar}>
                        <Navbtn icon={'faArrowUpRightDots'} title={'Popular in 2022'} />
                    </NavLink>
                    <NavLink className='links' to="/discover/all-time-top" onClick={closeSidebar}>
                        <Navbtn icon={'faCrown'} title={'All time top 250'} />
                    </NavLink>
                </div>
                <div className="platforms">
                    <p>Platforms</p>
                    <NavLink className='links' to="/games/pc" onClick={closeSidebar}>
                        <Navbtn icon={'faWindows'} title={'PC'} />
                    </NavLink>
                    <NavLink className='links' to="/games/playstation" onClick={closeSidebar}>
                        <Navbtn icon={'faPlaystation'} title={'PlayStation'} />
                    </NavLink>
                    <NavLink className='links' to="/games/xbox" onClick={closeSidebar}>
                        <Navbtn icon={'faXbox'} title={'Xbox One'} />
                    </NavLink>
                    <NavLink className='links' to="/games/mac" onClick={closeSidebar}>
                        <Navbtn icon={'faApple'} title={'mac'} />
                    </NavLink>
                    <NavLink className='links' to="/games/nintendo" onClick={closeSidebar}>
                        <Navbtn icon={'nintendo'} title={'Nintendo'} />
                    </NavLink>
                    <NavLink className='links' to="/games/ios" onClick={closeSidebar}>
                        <Navbtn icon={'faAppStoreIos'} title={'ios'} />
                    </NavLink>
                    <NavLink className='links' to="/games/android" onClick={closeSidebar}>
                        <Navbtn icon={'faAndroid'} title={'Android'} />
                    </NavLink>
                </div>
                <div className="genres">
                    <p>Genres</p>
                    <NavLink className='links' to="/games/action" onClick={closeSidebar}>
                        <GenreBtn icon={'action'} title={'Action'} />
                    </NavLink>
                    <NavLink className='links' to="/games/strategy" onClick={closeSidebar}>
                        <GenreBtn icon={'stratedy'} title={'Strategy'} />
                    </NavLink>
                    <NavLink className='links' to="/games/rpg" onClick={closeSidebar}>
                        <GenreBtn icon={'rpg'} title={'RPG'} />
                    </NavLink>
                    <NavLink className='links' to="/games/adventure" onClick={closeSidebar}>
                        <GenreBtn icon={'shooter'} title={'Adventure'} />
                    </NavLink>
                    <NavLink className='links' to="/games/puzzle" onClick={closeSidebar}>
                        <GenreBtn icon={'puzzle'} title={'Puzzle'} />
                    </NavLink>
                    <NavLink className='links' to="/games/racing" onClick={closeSidebar}>
                        <GenreBtn icon={'racing'} title={'Racing'} />
                    </NavLink>
                    <NavLink className='links' to="/games/sports" onClick={closeSidebar}>
                        <GenreBtn icon={'sports'} title={'Sports'} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SideNav;