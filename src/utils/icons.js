// import { faGift, faLayerGroup, faStar, faFire, faForwardFast, faTrophy, faArrowUpRightDots, faCrown } from '@fortawesome/free-solid-svg-icons';
// import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
// import { faPlaystation, faXbox, faApple, faAndroid, faWindows } from '@fortawesome/free-brands-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

const getIcon = (icon) => {
    const allIcons = { ...solidIcons, ...brandIcons };
    return allIcons[icon] || null;
}

export default getIcon;