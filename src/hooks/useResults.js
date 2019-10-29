import { useState, useEffect } from 'react';

import yelp from '../api/yelp';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchApi = async (term = '') => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          // location: 'Hermosillo, Sonora, Mexico',
          location: 'Portland, Oregon',
        },
      });

      const { data: { businesses } } = response;
      setResults(businesses);
    } catch (error) {
      console.error(error);
      setErrorMsg('Something went wrong');
    }
  };

  useEffect(() => {
    const foods = ['Japanese', 'Chinese', 'Italian', 'Mexican', 'Burgers', 'Seafood', 'Tacos'];
    const defaultTerm = foods[Math.floor(Math.random() * foods.length)];
    // const actualHr = new Date().getHours();
    // const defaultTerm = 4 <= actualHr && actualHr < 12 ? 'Breakfast'
    //   : 12 <= actualHr && actualHr < 19 ? 'Lunch'
    //     : 'Dinner';

    searchApi(defaultTerm);
  }, []);

  return { searchApi, results, errorMsg };
};

export default useResults;

