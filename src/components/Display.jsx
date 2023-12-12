import { useEffect, useState } from 'react';
import '../assets/styles/display.css'
import GameCard from './GameCard';
import { GAMES_API } from '../utils/constants';
import Pagination from './Pagination';

const Display = () => {
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${GAMES_API}&page=${currentPage}&page_size=40`);
                const res = await response.json();
                setData(res);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentPage, data])

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="display">
            <h1 className='display-heading'>All Games</h1>
            {data ? (
                <div className="games">
                    {Array.isArray(data.results) &&
                        data.results.map((game) => <GameCard key={game.id} data={game} />)}
                </div>
            ) : (
                <p>Loading...</p>
            )}

            {data && data.count > 40 && (
                <Pagination currentPage={currentPage} totalPages={Math.ceil(data.count / 40)} onPageChange={handlePageChange} />
            )}
        </div>
    )
}

export default Display;