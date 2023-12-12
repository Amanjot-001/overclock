import '../assets/styles/sideNav.css'
import Navbtn from './NavBtn';
import GenreBtn from './GenreBtn';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="sideNav">
            <NavLink className='links' to="/">
                <div className="home">
                    Home
                </div>
            </NavLink>
            <NavLink className='links' to="/reviews">
                <div className="reviews">
                    Reviews
                </div>
            </NavLink>
            <NavLink className='links' to="/profile">
                <div className="profile">
                    <p>Amanjot</p>
                    <div className="user-initial">A</div>
                </div>
            </NavLink>
            <div className="user-list">
                <NavLink className='links' to="/discover/wishlist">
                    <Navbtn icon={'faGift'} title={'Wishlist'} />
                </NavLink>
                <NavLink className='links' to="/my-library">
                    <Navbtn icon={'faLayerGroup'} title={'My library'} />
                </NavLink>
            </div>
            <div className="new-releases">
                <p>New Releases</p>
                <NavLink className='links' to="/discover/last-30-days">
                    <Navbtn icon={'faStar'} title={'Last 30 days'} />
                </NavLink>
                <NavLink className='links' to="/discover/this-week">
                    <Navbtn icon={'faFire'} title={'This week'} />
                </NavLink>
                <NavLink className='links' to="/discover/next-week">
                    <Navbtn icon={'faForwardFast'} title={'Next week'} />
                </NavLink>
                <Navbtn icon={'faCalendarDays'} title={'Release calender'} />
            </div>
            <div className="top">
                <p>Top</p>
                <NavLink className='links' to="/discover/best-of-the-year">
                    <Navbtn icon={'faTrophy'} title={'Best of the year'} />
                </NavLink>
                <NavLink className='links' to="/discover/popular-in-2022">
                    <Navbtn icon={'faArrowUpRightDots'} title={'Popular in 2022'} />
                </NavLink>
                <NavLink className='links' to="/discover/all-time-top">
                    <Navbtn icon={'faCrown'} title={'All time top 250'} />
                </NavLink>
            </div>
            <div className="platforms">
                <p>Platforms</p>
                <NavLink className='links' to="/games/pc">
                    <Navbtn icon={'faWindows'} title={'PC'} />
                </NavLink>
                <NavLink className='links' to="/games/playstation">
                    <Navbtn icon={'faPlaystation'} title={'PlayStation'} />
                </NavLink>
                <NavLink className='links' to="/games/xbox">
                    <Navbtn icon={'faXbox'} title={'Xbox One'} />
                </NavLink>
                <NavLink className='links' to="/games/mac">
                    <Navbtn icon={'faApple'} title={'mac'} />
                </NavLink>
                <NavLink className='links' to="/games/nintendo">
                    <Navbtn icon={'nintendo'} title={'Nintendo'} />
                </NavLink>
                <NavLink className='links' to="/games/ios">
                    <Navbtn icon={'faAppStoreIos'} title={'ios'} />
                </NavLink>
                <NavLink className='links' to="/games/android">
                    <Navbtn icon={'faAndroid'} title={'Android'} />
                </NavLink>
            </div>
            <div className="genres">
                <p>Genres</p>
                <NavLink className='links' to="/games/action">
                    <GenreBtn icon={'action'} title={'Action'} />
                </NavLink>
                <NavLink className='links' to="/games/strategy">
                    <GenreBtn icon={'stratedy'} title={'Strategy'} />
                </NavLink>
                <NavLink className='links' to="/games/rpg">
                    <GenreBtn icon={'rpg'} title={'RPG'} />
                </NavLink>
                <NavLink className='links' to="/games/adventure">
                    <GenreBtn icon={'shooter'} title={'Adventure'} />
                </NavLink>
                <NavLink className='links' to="/games/puzzle">
                    <GenreBtn icon={'puzzle'} title={'Puzzle'} />
                </NavLink>
                <NavLink className='links' to="/games/racing">
                    <GenreBtn icon={'racing'} title={'Racing'} />
                </NavLink>
                <NavLink className='links' to="/games/sports">
                    <GenreBtn icon={'sports'} title={'Sports'} />
                </NavLink>
            </div>
        </div>
    )
}

export default SideNav;