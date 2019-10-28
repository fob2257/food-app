import axios from 'axios';

import { default as keys } from '../../env.local.json';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${keys.YELP_API_KEY}`,
  },
});
