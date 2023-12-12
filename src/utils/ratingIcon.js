import exceptional from '../assets/images/exceptional.png';
import recommended from '../assets/images/recommended.png';
import meh from '../assets/images/meh.png';
import skip from '../assets/images/skip.png';
import notKnow from '../assets/images/dont-know.png'

const getRatingIcon = (data) => {
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

export default getRatingIcon;