import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faPlaystation, faXbox, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'
import '../assets/styles/gameCard.css'

const GameCard = ({ data }) => {
    const getPlatformIcon = (platformName) => {
        switch (platformName) {
            case 'pc':
                return faWindows;
            case 'playstation':
                return faPlaystation;
            case 'xbox':
                return faXbox;
            case 'apple macintosh':
                return faApple;
            case 'android':
                return faAndroid;
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
                        return icon && <span key={platform.platform.id}><FontAwesomeIcon icon={icon} /></span>;
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