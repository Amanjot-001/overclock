import '../assets/styles/header.css';
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                overClock
            </div>
            <div className="search-bar">
                <input className='header-search' type="text" placeholder='search games'/>
            </div>
            <div className="navs">
                <div className="sign-in">Sign-in</div>
                <div className="curr-path">My library</div>
                <div className="cart">cart</div>
            </div>
        </div>
    )
}

export default Header;