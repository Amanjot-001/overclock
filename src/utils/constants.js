export const GAMES_API = 'https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&page_size=40';
export const GAMES_API_2 = 'https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&page=2';
export const GAMES_API_3 = 'https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&page=3';
export const GAMES_API_4 = 'https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&page=4';



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

export const LAST_30_DAYS_API = `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&dates=${startDateLast30DaysString},${endDateLast30Days}&page=1&page_size=40`;
export const THIS_WEEK_API = `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&dates=${startDateThisWeekString},${endDateThisWeekString}&page=1&page_size=40`;
export const NEXT_WEEK_API = `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&dates=${startDateNextWeekString},${endDateNextWeekString}&page=1&page_size=40`;