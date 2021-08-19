import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    method: 'GET',
    url: URL,
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359'
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '0152f93adbmshfe9d9b9c87b4e33p1e82fdjsn4f91b94bec7e'
    }
  };
  
export const getPlacesData = async () => {
    try {
        // Api calls made to Rapid API
        const { data: { data } } = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}