import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faPlaystation, faXbox, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import nintendo from '../assets/images/switch-icon.png';

const FontawesomeIcon = ({ icon }) => <FontAwesomeIcon icon={icon} />;
const NintendoIcon = () => <img className='switch-icon' src={nintendo} alt="Nintendo Switch" />;

const getPlatformIcon = (platformName) => {
    switch (platformName) {
        case 'pc':
            return <FontawesomeIcon icon={faWindows} />;
        case 'playstation':
            return <FontawesomeIcon icon={faPlaystation} />;
        case 'xbox':
            return <FontawesomeIcon icon={faXbox} />;
        case 'mac':
            return <FontawesomeIcon icon={faApple} />;
        case 'android':
            return <FontawesomeIcon icon={faAndroid} />;
        case 'nintendo':
            return <NintendoIcon />;
        default:
            return null;
    }
};

export default getPlatformIcon;
