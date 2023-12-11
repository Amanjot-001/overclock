import { LAST_30_DAYS_API } from "./constants";

const useDisplay = (text) => {
    switch(text) {
        case 'last-30-days':
            return LAST_30_DAYS_API;
    }
} 

export default useDisplay;