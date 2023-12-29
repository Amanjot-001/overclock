import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faCartShopping, faChevronRight, faGift } from '@fortawesome/free-solid-svg-icons';
import nintendo from '../assets/images/switch-icon.png';
import { getRatingIcon, getPlatformIcon } from '../utils/useGameCard';
import PropTypes from 'prop-types'
import { useEffect, useMemo, useRef, useState } from 'react';
import '../assets/styles/gameCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import defaultImg from '../assets/images/game.jpg'

const FakeContainer = styled.div`
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
`;

const GameCard = ({ data }) => {
    const [bgimgLoaded, setBgimgLoaded] = useState(false);
    const [lastHoveredImage, setLastHoveredImage] = useState(-1);
    const [fakeHeight, setFakeHeight] = useState(null);
    const cardRef = useRef(null);

    const rating = getRatingIcon(data.ratings[0]?.title);
    const metaRating = data.metacritic;

    const nintendoIcon = useMemo(() => <img className='switch-icon' src={nintendo} alt="Nintendo Switch" />, []);

    const cartItems = useSelector((store) => store.cart.items);

    const isAdded = cartItems.some(item => item.id === data.id);

    const dispatch = useDispatch();
    const handleAddItem = (dataToChange) => {
        if (!isAdded)
            dispatch(addItem(dataToChange));
        else
            dispatch(removeItem(dataToChange));
    }

    const updateHeight = () => {
        if (cardRef.current) {
            const cardHeight = cardRef.current.offsetHeight;
            setFakeHeight(cardHeight);
        }
    };

    const handleImageHover = (itemId) => {
        setLastHoveredImage(itemId);
    };

    const handleMouseEvent = () => {
        updateHeight();
    };

    useEffect(() => {
        updateHeight();

        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    });

    return (
        <FakeContainer className='fake' height={fakeHeight}>
            <div
                className="game-card"
                ref={cardRef}
                // onMouseEnter={handleMouseEvent}
                onMouseLeave={handleMouseEvent}
            >
                {data ? (
                    <>
                        <div className="game-img">
                            {!bgimgLoaded ?
                                <img
                                    src={defaultImg}
                                    alt="game-img"
                                    className='default-image'
                                    onLoad={() => setBgimgLoaded(true)}
                                />
                                :
                                <div className="all-images">
                                    <img
                                        src={data?.short_screenshots.find(item => item.id === lastHoveredImage)?.image || data.background_image}
                                        alt={`screenshot`}
                                        onLoad={() => setBgimgLoaded(true)}
                                    />
                                    <div className="image-btns" onMouseLeave={() => handleImageHover(-1)}                                    >
                                        {data.short_screenshots.map((item) => (
                                            <div
                                                key={item.id}
                                                className={`image-key ${lastHoveredImage === item.id ? 'image-key-active' : ''}`}
                                                onMouseEnter={() => handleImageHover(item.id)}
                                            >
                                                <div></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
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
                                <div className={`add-btn ${isAdded ? 'added' : null}`} onClick={() => handleAddItem(data)}>
                                    {isAdded ? 'Remove' : 'Add'}
                                    <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
                                </div>
                            </div>
                            {bgimgLoaded &&
                                <div className="extra-sec">
                                    <div className="released">
                                        <span>Release date:</span>
                                        <span>{data.released}</span>
                                    </div>
                                    <hr />
                                    <div className="game-genre">
                                        <span>Genres:</span>
                                        <span className='all-genres'>
                                            {data.genres.slice(0, 3).map((gameGenre, index) => (
                                                <React.Fragment key={gameGenre.id}>
                                                    {index > 0 && ', '}
                                                    {gameGenre.name}
                                                </React.Fragment>
                                            ))}
                                            {data.genres.length > 3 && '...'}
                                        </span>
                                    </div>
                                    <hr />
                                    <div className="see-more-btn">
                                        <span>See more</span>
                                        <span><FontAwesomeIcon icon={faChevronRight} /></span>
                                    </div>
                                </div>
                            }
                        </div>
                    </>
                ) : (
                    <h1 className='no-content-heading'>No content available</h1>
                )}
            </div>
        </FakeContainer>
    )
}

GameCard.propTypes = {
    data: PropTypes.object
}

export default GameCard;