import '../assets/styles/display.css'
import GameCard from './GameCard';

const Display = () => {
    return (
        <div className="display">
            <h1>Top Picks</h1>
            <div className="games">
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </div>
        </div>
    )
}

export default Display;