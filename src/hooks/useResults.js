import React, { useState, useEffect } from 'react';

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
          location: 'Hermosillo, Sonora',
        },
      });

      const { data: { business } } = response;
      setResults(business);
    } catch (error) {
      console.error(error);
      setErrorMsg('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('Tacos');
  }, []);

  return [searchApi, results, errorMsg];
};

export default useResults;

