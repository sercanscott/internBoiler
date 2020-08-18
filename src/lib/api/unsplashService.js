import axios from 'axios';

export const baseURL = 'https://source.unsplash.com';

export const getRandomImage = (width = 600, height = 800) => (
  axios.get(`${baseURL}/random/${width}x${height}`)
);
