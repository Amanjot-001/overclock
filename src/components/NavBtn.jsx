import '../assets/styles/navBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useNavBtn from '../utils/useNavBtn';
import nintendo from '../assets/images/switch-icon.png';

const Navbtn = ({ icon, title }) => {
    const iconName = useNavBtn(icon);
    return (
        <div className="navBtn">
            <div className="navBtn-image">
                {icon === 'nintendo' ?
                        <img className='nintendo-icon' src={nintendo} alt="" />
                    :
                    <FontAwesomeIcon icon={iconName} />
                }
            </div>
            <div className="navBtn-title">
                {title}
            </div>
        </div>
    )
}

export default Navbtn;