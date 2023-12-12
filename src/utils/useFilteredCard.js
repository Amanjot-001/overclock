import { LAST_30_DAYS_API, THIS_WEEK_API, NEXT_WEEK_API, BEST_OF_THE_YEAR_API, POPULAR_IN_2022_API, ALL_TIME_TOP_API, PLATFORM_API, GENRES_API } from "./constants";

const useFilteredCard = (text) => {
    switch(text) {
        case 'last-30-days':
            return LAST_30_DAYS_API;
        case 'this-week':
            return THIS_WEEK_API;
        case 'next-week':
            return NEXT_WEEK_API;
        case 'best-of-the-year':
            return BEST_OF_THE_YEAR_API;
        case 'popular-in-2022':
            return POPULAR_IN_2022_API;
        case 'all-time-top':
            return ALL_TIME_TOP_API;
        case 'pc':
            return PLATFORM_API(1);
        case 'playstation':
            return PLATFORM_API(2);
        case 'xbox':
            return PLATFORM_API(3);
        case 'ios':
            return PLATFORM_API(4);
        case 'mac':
            return PLATFORM_API(5);
        case 'android':
            return PLATFORM_API(8);
        case 'nintendo':
            return PLATFORM_API(7);
        case 'action':
            return GENRES_API('action');
        case 'strategy':
            return GENRES_API('strategy');
        case 'rpg':
            return GENRES_API('role-playing-games-rpg');
        case 'adventure':
            return GENRES_API('adventure');
        case 'puzzle':
            return GENRES_API('puzzle');
        case 'racing':
            return GENRES_API('racing');
        case 'sports':
            return GENRES_API('sports');
        default:
            return null;
    }
} 

export default useFilteredCard;