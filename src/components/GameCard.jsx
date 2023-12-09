import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/gameCard.css'

const GameCard = () => {
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
                    Have a Nice Death
                </div>
                <div className="rating">
                    <FontAwesomeIcon icon={faFaceGrinHearts} />
                </div>
                <div className="follow">
                    +315
                </div>
            </div>
        </div>
    )
}

export default GameCard;