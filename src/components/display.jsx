import { useEffect, useState } from 'react';
import '../assets/styles/display.css'
import GameCard from './GameCard';
import { GAMES_API } from '../utils/constants';

const Display = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(GAMES_API);
                const res = await response.json();
                setData(res);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    console.log(Date())

    return (
        <div className="display">
            <h1>Top Picks</h1>
            {data ? (
                <div className="games">
                    {Array.isArray(data.results) &&
                        data.results.map((game) => <GameCard key={game.id} data={game} />)}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Display;