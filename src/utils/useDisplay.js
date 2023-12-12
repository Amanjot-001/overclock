import { LAST_30_DAYS_API, THIS_WEEK_API, NEXT_WEEK_API, BEST_OF_THE_YEAR_API, POPULAR_IN_2022_API, ALL_TIME_TOP_API, PLATFORM_API } from "./constants";

const useDisplay = (text) => {
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
        default:
            return null;
    }
} 

export default useDisplay;