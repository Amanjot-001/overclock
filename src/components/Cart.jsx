import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGift } from '@fortawesome/free-solid-svg-icons';
import nintendo from '../assets/images/switch-icon.png';
import { useMemo } from 'react';
import '../assets/styles/cart.css'
import { getRatingIcon, getPlatformIcon } from '../utils/useGameCard';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const nintendoIcon = useMemo(() => <img className='switch-icon' src={nintendo} alt="Nintendo Switch" />, []);

    return (
        <div id="cart">
            <h1 className='cart-heading'>Cart</h1>
            <div className="cart-items">
                {cartItems.map((data) => (
                    <div key={data.id} className="cart-item">
                        <div className="item-img">
                            <img src={data.background_image} alt="" />
                        </div>
                        <div className="item-content">
                            <div className="item-name">
                                {data.name}
                            </div>
                            <div className="item-top-sec">
                                <div className="item-rating">
                                    <img className='rating-icon' src={getRatingIcon(data.ratings[0]?.title)} alt="rating-icon" />
                                </div>
                                {data.metacritic ?
                                    <div className="item-metarating">
                                        {data.metacritic}
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            <div className="item-mid-sec">
                                <div className="item-platforms">
                                    {data.parent_platforms.map((platform) => {
                                        const icon = getPlatformIcon(platform.platform.slug);
                                        return icon !== null ? (
                                            <span key={platform.platform.id}>
                                                {icon === 'nintendo' ? nintendoIcon : <FontAwesomeIcon icon={icon} />}
                                            </span>
                                        ) : null;
                                    })}
                                </div>
                                <div className="item-wishlist-btn">
                                    wishlist <FontAwesomeIcon className='wishlist-icon' icon={faGift} />
                                </div>
                            </div>
                            <div className="item-down-sec">
                                <div className="item-follows">
                                    +{data.added}
                                </div>
                                <div className="item-remove-btn">
                                    Remove <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Cart;