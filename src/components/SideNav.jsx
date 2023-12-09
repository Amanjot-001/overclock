import '../assets/styles/sideNav.css'
import Navbtn from './NavBtn';

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
            <div className="user-games">
                <Navbtn image={'faGift'} title={'Wishlist'}/>
            </div>
        </div>
    )
}

export default SideNav;