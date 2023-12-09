import { useEffect, useState } from 'react';
import '../assets/styles/display.css'
import GameCard from './GameCard';

const Display = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&page=1');
                const res = await response.json();
                setData(res);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

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