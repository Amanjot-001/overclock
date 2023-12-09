import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'
import '../assets/styles/gameCard.css'

const GameCard = ({ data }) => {
    return (
        <div className="game-card">
            <div className="game-img">
                <img src="https://media.rawg.io/media/games/648/6485d70bb1166ba94353182d61fcd157.jpg" alt="" />
            </div>
            <div className="content">
                <div className="platform">
                    <FontAwesomeIcon icon={faWindows} />
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