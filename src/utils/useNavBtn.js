import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

const useNavBtn = (icon) => {
    const allIcons = { ...solidIcons, ...brandIcons };
    return allIcons[icon] || null;
}

export default useNavBtn;