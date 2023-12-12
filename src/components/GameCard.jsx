import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWindows, faPlaystation, faXbox, faApple, faAndroid, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faGift } from '@fortawesome/free-solid-svg-icons';
import nintendo from '../assets/images/switch-icon.png';
import { getRatingIcon, getPlatformIcon } from '../utils/useGameCard';
import PropTypes from 'prop-types'
import { useMemo } from 'react';
import '../assets/styles/gameCard.css'

const GameCard = ({ data }) => {
    const rating = getRatingIcon(data.ratings[0]?.title);
    const metaRating = data.metacritic;
    // const getPlatformIcon = (platformName) => {
    //     switch (platformName) {
    //         case 'pc':
    //             return faWindows;
    //         case 'playstation':
    //             return faPlaystation;
    //         case 'xbox':
    //             return faXbox;
    //         case 'mac':
    //             return faApple;
    //         case 'ios':
    //             return faAppStoreIos;
    //         case 'android':
    //             return faAndroid;
    //         case 'nintendo':
    //             return nintendoIcon;
    //         default:
    //             return null;
    //     }
    // };

    const nintendoIcon = useMemo(() => <img className='switch-icon' src={nintendo} alt="Nintendo Switch" />, []);

    return (
        <div className="game-card">
            {data ? (
                <>
                    <div className="game-img">
                        <img src={data.background_image} alt="" />
                    </div>
                    <div className="content">
                        <div className="top-sec">
                            <div className="platform">
                                {data.parent_platforms.map((platform) => {
                                    const icon = getPlatformIcon(platform.platform.slug);
                                    return icon !== null ? (
                                        <span key={platform.platform.id}>
                                            {icon === 'nintendo' ? nintendoIcon : <FontAwesomeIcon icon={icon} />}
                                        </span>
                                    ) : null;
                                })}
                            </div>
                            {metaRating ?
                                <div className="meta-rating">
                                    {metaRating}
                                </div>
                                :
                                null
                            }
                        </div>
                        <div className="name">
                            {data.name}
                        </div>
                        <div className="mid-sec">
                            <div className="rating">
                                <img className='rating-icon' src={rating} alt="rating-icon" />
                            </div>
                            <div className="wishlist-btn">
                                wishlist <FontAwesomeIcon className='wishlist-icon' icon={faGift} />
                            </div>
                        </div>
                        <div className="down-sec">
                            <div className="follow">
                                +{data.added}
                            </div>
                            <div className="add-btn">
                                Add <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <h1 className='no-content-heading'>No content available</h1>
            )}
        </div>
    )
}

GameCard.propTypes = {
    data: PropTypes.object
}

export default GameCard;