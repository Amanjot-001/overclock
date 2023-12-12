import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/filteredCard.css'
import GameCard from './GameCard';
import useFilteredCard from '../utils/useFilteredCard';
import Pagination from './Pagination';
import Shimmer from './Shimmer';

const FilteredCard = () => {
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const { timeFrame } = useParams();

    const API_TO_USE = useFilteredCard(timeFrame);

    useEffect(() => {
        setCurrentPage(1);
    }, [timeFrame]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_TO_USE}&page=${currentPage}&page_size=40`);
                const res = await response.json();
                setData(res);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => {
            // setCurrentPage(1);
            setData(null);
        }
    }, [API_TO_USE, currentPage, timeFrame])

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="display">
            <h1 className='display-heading'>{timeFrame}</h1>
            {data ? (
                <div className="games">
                    {Array.isArray(data.results) && data.results.length > 0 ? (
                        data.results.map((game) => <GameCard key={game.id} data={game} />)
                    ) : (
                        <h1>No content available</h1>
                    )}
                </div>
            ) : (
                <Shimmer />
            )}

            {data && data.count > 40 && (
                <Pagination currentPage={currentPage} totalPages={Math.ceil(data.count / 40)} onPageChange={handlePageChange} />
            )}
        </div>
    )
}

export default FilteredCard;