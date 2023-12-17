import '../assets/styles/pagination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (newPage) => {
        onPageChange(newPage);
    };

    const getPageNumbers = () => {
        const pages = [];
        const range = 1;

        let showEllipsisStart = true;
        let showEllipsisEnd = true;

        pages.push(1);
        showEllipsisStart = false;

        for (let i = 2; i < totalPages; i++) {
            if (i === currentPage || i >= currentPage - range && i <= currentPage + range) {
                pages.push(i);
                showEllipsisStart = true;
            } else if (showEllipsisStart || showEllipsisEnd) {
                pages.push(null);
                showEllipsisStart = false;
                showEllipsisEnd = false;
            }
        }

        pages.push(totalPages);
        showEllipsisEnd = false;

        return pages;
    };

    return (
        <div className="pagination">
            <button className='prev-btn' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => handlePageChange(page)}
                    className={`page-btn ${page === currentPage ? 'active-page' : ''}`}
                    disabled={page === null}
                >
                    {page !== null ? page : '...'}
                </button>
            ))}
            <button className='next-btn' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default Pagination;