import '../assets/styles/genreBtn.css'
import { genreIcon } from '../utils/icons';

const GenreBtn = ({ icon, title }) => {
    const genreImage = genreIcon(icon);
    return (
        <div className="genreBtn">
            <div className="genre-image">
                <img src={genreImage} alt="game-icon" />
            </div>
            <div className="title">
                {title}
            </div>
        </div>
    )
}

export default GenreBtn;