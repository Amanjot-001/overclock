import '../assets/styles/navBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faLayerGroup, faStar, faFire, faForwardFast, faTrophy, faArrowUpRightDots, faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPlaystation, faXbox, faApple, faAndroid, faWindows } from '@fortawesome/free-brands-svg-icons';

const Navbtn = ({image, title}) => {
    return (
        <div className="navBtn">
            <div className="image">
                <FontAwesomeIcon icon={image} />
            </div>
            <div className="title">
                {title}
            </div>
        </div>
    )
}

export default Navbtn;