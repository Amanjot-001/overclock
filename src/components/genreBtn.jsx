import '../assets/styles/genreBtn.css'
import getGenreIcon from '../utils/genreIcon';

const GenreBtn = ({ icon, title }) => {
    const genreImage = getGenreIcon(icon);
    return (
        <div className="genreBtn">
            <div className="genre-image">
                <img src={genreImage} alt="game-icon" />
            </div>
            <div className="genre-title">
                {title}
            </div>
        </div>
    )
}

export default GenreBtn;