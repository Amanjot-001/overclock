import exceptional from '../assets/images/exceptional.png';
import recommended from '../assets/images/recommended.png';
import meh from '../assets/images/meh.png';
import skip from '../assets/images/skip.png';
import notKnow from '../assets/images/dont-know.png'
import { faWindows, faPlaystation, faXbox, faApple, faAndroid, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

export const getRatingIcon = (data) => {
    switch(data) {
        case 'exceptional':
            return exceptional;
        case 'recommended':
            return recommended;
        case 'meh':
            return meh;
        case 'skip':
            return skip;
        default:
            return notKnow;
    }
}

export const getPlatformIcon = (platformName) => {
    switch (platformName) {
        case 'pc':
            return faWindows;
        case 'playstation':
            return faPlaystation;
        case 'xbox':
            return faXbox;
        case 'mac':
            return faApple;
        case 'ios':
            return faAppStoreIos;
        case 'android':
            return faAndroid;
        case 'nintendo':
            return 'nintendo';
        default:
            return null;
    }
};
