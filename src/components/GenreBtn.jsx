import '../assets/styles/genreBtn.css'
import useGenreBtn from '../utils/useGenreBtn';

const GenreBtn = ({ icon, title }) => {
    const genreImage = useGenreBtn(icon);
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