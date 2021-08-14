import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

export const getData = (topic) => axios({
  url: `${API_URL}/${topic}/popular?api_key=c654685165c467c1f991d6635454599f`,
  method: 'get',
});