export const GAMES_API = 'https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&page_size=40';
export const GAMES_API_2 = 'https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&page=2';
export const GAMES_API_3 = 'https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&page=3';
export const GAMES_API_4 = 'https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&page=4';



const currDate = new Date();
const endDate = currDate.toISOString().split('T')[0];

const startDate = new Date(currDate);
startDate.setDate(currDate.getDate() - 30);
const startDateString = startDate.toISOString().split('T')[0];

export const LAST_30_DAYS_API = `https://api.rawg.io/api/games?key=9de23704b3a346208aef52090b3b4c60&dates=${startDateString},${endDate}&page=1&page_size=40`;