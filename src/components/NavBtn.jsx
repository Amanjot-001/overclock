import '../assets/styles/navBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getIcon from '../utils/icons';

const Navbtn = ({icon, title}) => {
    const iconName = getIcon(icon);
    return (
        <div className="navBtn">
            <div className="image">
                <FontAwesomeIcon icon={iconName} />
            </div>
            <div className="title">
                {title}
            </div>
        </div>
    )
}

export default Navbtn;