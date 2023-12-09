import '../assets/styles/sideNav.css'
import Navbtn from './NavBtn';
import GenreBtn from './genreBtn';

const SideNav = () => {
    return (
        <div className="sideNav">
            <div className="home">
                Home
            </div>
            <div className="reviews">
                Reviews
            </div>
            <div className="profile">
                Amanjot
                <div className="user-initial">A</div>
            </div>
            <div className="user-list">
                <Navbtn icon={'faGift'} title={'Wishlist'}/>
                <Navbtn icon={'faLayerGroup'} title={'My library'}/>
            </div>
            <div className="new-releases">
                <p>New Releases</p>
                <Navbtn icon={'faStar'} title={'Last 30 days'}/>
                <Navbtn icon={'faFire'} title={'this week'}/>
                <Navbtn icon={'faForwardFast'} title={'Next week'}/>
                <Navbtn icon={'faCalendarDays'} title={'Release calender'}/>
            </div>
            <div className="top">
                <p>Top</p>
                <Navbtn icon={'faTrophy'} title={'Best of the year'}/>
                <Navbtn icon={'faArrowUpRightDots'} title={'Popular in 2022'}/>
                <Navbtn icon={'faCrown'} title={'All time top 250'}/>
            </div>
            <div className="platforms">
                <p>Platforms</p>
                <Navbtn icon={'faWindows'} title={'PC'}/>
                <Navbtn icon={'faPlaystation'} title={'PlayStation'}/>
                <Navbtn icon={'faXbox'} title={'Xbox One'}/>
                <Navbtn icon={'faApple'} title={'ios'}/>
                <Navbtn icon={'faAndroid'} title={'Android'}/>
            </div>
            <div className="genres">
                <p>Genres</p>
                <GenreBtn icon={'action'} title={'Action'} />
                <GenreBtn icon={'stratedy'} title={'Stratedy'} />
                <GenreBtn icon={'rpg'} title={'RPG'} />
                <GenreBtn icon={'shooter'} title={'adventure'} />
                <GenreBtn icon={'puzzle'} title={'Puzzle'} />
                <GenreBtn icon={'racing'} title={'Racing'} />
                <GenreBtn icon={'sports'} title={'Sports'} />
            </div>
        </div>
    )
}

export default SideNav;