import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faPlaystation, faXbox, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';
import nintendo from '../assets/images/switch-icon.png';
import PropTypes from 'prop-types'
import { useMemo } from 'react';
import '../assets/styles/gameCard.css'

const GameCard = ({ data }) => {
    const nintendoIcon = useMemo(() => <img className='switch-icon' src={nintendo} alt="Nintendo Switch" />, []);
    const getPlatformIcon = (platformName) => {
        switch (platformName) {
            case 'pc':
                return faWindows;
            case 'playstation':
                return faPlaystation;
            case 'xbox':
                return faXbox;
            case 'mac':
                return faApple;
            case 'android':
                return faAndroid;
            case 'nintendo':
                return nintendoIcon;
            default:
                return null;
        }
    };

    return (
        <div className="game-card">
            <div className="game-img">
                <img src={data.background_image} alt="" />
            </div>
            <div className="content">
                <div className="platform">
                    {data.parent_platforms.map((platform) => {
                        const icon = getPlatformIcon(platform.platform.slug);
                        return icon !== null ? (
                            <span key={platform.platform.id}>
                                {icon === nintendoIcon ? nintendoIcon : <FontAwesomeIcon icon={icon} />}
                            </span>
                        ) : null;
                    })}
                </div>
                <div className="name">
                    {data.name}
                </div>
                <div className="rating">
                    <FontAwesomeIcon icon={faFaceGrinHearts} />
                </div>
                <div className="follow">
                    +{data.added}
                </div>
            </div>
        </div>
    )
}

GameCard.propTypes = {
    data: PropTypes.object
}

export default GameCard;