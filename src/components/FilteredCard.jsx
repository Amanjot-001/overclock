import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/filteredCard.css'
import GameCard from './GameCard';
import useDisplay from '../utils/useDisplay';

const FilteredCard = () => {
    const [data, setData] = useState(null);
    const { timeFrame } = useParams();
    
    const API_TO_USE = useDisplay(timeFrame);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_TO_USE);
                const res = await response.json();
                setData(res);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [API_TO_USE])

    return (
        <div className="display">
            <h1>{timeFrame}</h1>
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

export default FilteredCard;