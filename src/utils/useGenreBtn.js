import action from '../assets/images/genres/action.png'
import stratedy from '../assets/images/genres/stratedy.png';
import rpg from '../assets/images/genres/rpg.png';
import sports from '../assets/images/genres/sports.png';
import racing from '../assets/images/genres/racing.png';
import puzzle from '../assets/images/genres/puzzle.png';
import shooter from '../assets/images/genres/shooter.png';

export const useGenreBtn = (icon) => {
    switch(icon) {
        case 'action':
            return action;
        case 'stratedy':
            return stratedy;
        case 'rpg': 
            return rpg;
        case 'puzzle':
            return puzzle;
        case 'racing':
            return racing;
        case 'shooter':
            return shooter;
        case 'sports':
            return sports;
    }
}

export default useGenreBtn;