export const GAMES_API = 'https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60';


const currDate = new Date();
const endDateLast30Days = currDate.toISOString().split('T')[0];

const startDateLast30Days = new Date(currDate);
startDateLast30Days.setDate(currDate.getDate() - 30);
const startDateLast30DaysString = startDateLast30Days.toISOString().split('T')[0];

// Start date of this week (Sunday)
const startDateThisWeek = new Date(currDate);
startDateThisWeek.setDate(currDate.getDate() - currDate.getDay());
const startDateThisWeekString = startDateThisWeek.toISOString().split('T')[0];

// End date of this week (Saturday)
const endDateThisWeek = new Date(currDate);
endDateThisWeek.setDate(currDate.getDate() + (6 - currDate.getDay()));
const endDateThisWeekString = endDateThisWeek.toISOString().split('T')[0];

// Start date of next week (Sunday)
const startDateNextWeek = new Date(currDate);
startDateNextWeek.setDate(currDate.getDate() + (7 - currDate.getDay()));
const startDateNextWeekString = startDateNextWeek.toISOString().split('T')[0];

// End date of next week (Saturday)
const endDateNextWeek = new Date(currDate);
endDateNextWeek.setDate(currDate.getDate() + (13 - currDate.getDay()));
const endDateNextWeekString = endDateNextWeek.toISOString().split('T')[0];

export const LAST_30_DAYS_API = `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&dates=${startDateLast30DaysString},${endDateLast30Days}`;
export const THIS_WEEK_API = `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&dates=${startDateThisWeekString},${endDateThisWeekString}`;
export const NEXT_WEEK_API = `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&dates=${startDateNextWeekString},${endDateNextWeekString}`;

export const BEST_OF_THE_YEAR_API = `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&dates=2023-01-01,2023-12-31&ordering=-rating`;
export const POPULAR_IN_2022_API = `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&dates=2022-01-01,2022-12-31&ordering=-rating`;
export const ALL_TIME_TOP_API = `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&ordering=-rating`;


export const PLATFORM_API = (platformNumber) => {
    return `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&parent_platforms=${platformNumber}`;
}

export const GENRES_API = (genreName) => {
    return `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&genres=${genreName}`;
}