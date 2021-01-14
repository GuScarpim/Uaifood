import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://developers.zomato.com/api/v2.1/'
})

api.interceptors.request.use(async (config) => {
  try {
    config.headers = {
      'user-key': `d1d61cc7f5af865cd1747a6d33d68ce1`,
      'Accept': 'application/json',
    }
    return config;
  } catch (err) {
    console.log(err)
  }
});

export default api;