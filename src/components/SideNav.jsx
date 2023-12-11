import '../assets/styles/sideNav.css'
import Navbtn from './NavBtn';
import GenreBtn from './genreBtn';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="sideNav">
            <Link className='links' to="/">
                <div className="home">
                    Home
                </div>
            </Link>
            <Link className='links' to="/reviews">
                <div className="reviews">
                    Reviews
                </div>
            </Link>
            <Link className='links' to="/profile">
                <div className="profile">
                    <p>Amanjot</p>
                    <div className="user-initial">A</div>
                </div>
            </Link>
            <div className="user-list">
                <Link className='links' to="/discover/wishlist">
                    <Navbtn icon={'faGift'} title={'Wishlist'} />
                </Link>
                <Link className='links' to="/my-library">
                    <Navbtn icon={'faLayerGroup'} title={'My library'} />
                </Link>
            </div>
            <div className="new-releases">
                <p>New Releases</p>
                <Link className='links' to="/discover/last-30-days">
                    <Navbtn icon={'faStar'} title={'Last 30 days'} />
                </Link>
                <Link className='links' to="/discover/this-week">
                    <Navbtn icon={'faFire'} title={'this week'} />
                </Link>
                <Link className='links' to="/discover/next-week">
                    <Navbtn icon={'faForwardFast'} title={'Next week'} />
                </Link>
                <Navbtn icon={'faCalendarDays'} title={'Release calender'} />
            </div>
            <div className="top">
                <p>Top</p>
                <Link className='links' to="/discover/best-of-the-year">
                    <Navbtn icon={'faTrophy'} title={'Best of the year'} />
                </Link>
                <Link className='links' to="/discover/popular-in-2022">
                    <Navbtn icon={'faArrowUpRightDots'} title={'Popular in 2022'} />
                </Link>
                <Link className='links' to="/discover/all-time-top">
                    <Navbtn icon={'faCrown'} title={'All time top 250'} />
                </Link>
            </div>
            <div className="platforms">
                <p>Platforms</p>
                <Link className='links' to="/games/pc">
                    <Navbtn icon={'faWindows'} title={'PC'} />
                </Link>
                <Link className='links' to="/games/playstation">
                    <Navbtn icon={'faPlaystation'} title={'PlayStation'} />
                </Link>
                <Link className='links' to="/games/xbox">
                    <Navbtn icon={'faXbox'} title={'Xbox One'} />
                </Link>
                <Link className='links' to="/games/ios">
                    <Navbtn icon={'faApple'} title={'ios'} />
                </Link>
                <Link className='links' to="/games/android">
                    <Navbtn icon={'faAndroid'} title={'Android'} />
                </Link>
            </div>
            <div className="genres">
                <p>Genres</p>
                <Link className='links' to="/games/action">
                    <GenreBtn icon={'action'} title={'Action'} />
                </Link>
                <Link className='links' to="/games/stratedy">
                    <GenreBtn icon={'stratedy'} title={'Stratedy'} />
                </Link>
                <Link className='links' to="/games/rps">
                    <GenreBtn icon={'rpg'} title={'RPG'} />
                </Link>
                <Link className='links' to="/games/adventure">
                    <GenreBtn icon={'shooter'} title={'Adventure'} />
                </Link>
                <Link className='links' to="/games/puzzle">
                    <GenreBtn icon={'puzzle'} title={'Puzzle'} />
                </Link>
                <Link className='links' to="/games/racing">
                    <GenreBtn icon={'racing'} title={'Racing'} />
                </Link>
                <Link className='links' to="/games/sports">
                    <GenreBtn icon={'sports'} title={'Sports'} />
                </Link>
            </div>
        </div>
    )
}

export default SideNav;