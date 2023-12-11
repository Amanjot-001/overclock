import { LAST_30_DAYS_API, THIS_WEEK_API, NEXT_WEEK_API } from "./constants";

const useDisplay = (text) => {
    switch(text) {
        case 'last-30-days':
            return LAST_30_DAYS_API;
        case 'this-week':
            return THIS_WEEK_API;
        case 'next-week':
            return NEXT_WEEK_API;
        default:
            return null;
    }
} 

export default useDisplay;