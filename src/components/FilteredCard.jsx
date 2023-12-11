import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/filteredCard.css'
import { LAST_30_DAYS_API } from '../utils/constants';
import GameCard from './GameCard';

const FilteredCard = ({api_name}) => {
    const [data, setData] = useState(null);
    const obj = useParams();
    console.log(obj)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(LAST_30_DAYS_API);
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

export default FilteredCard;