import { useState, useEffect, useContext } from 'react';

import yelp from '../api/yelp';

import Context from '../context';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const { state } = useContext(Context);

  const fetchResults = async (term = '') => {
    try {
      const locationData = state.userPosition ? { ...state.userPosition }
        : { location: 'San Francisco, California' };

      const response = await yelp.get('/search', {
        params: {
          term: !!term ? term : undefined,
          limit: 50,
          radius: 20000,
          ...locationData,
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
    // const foods = ['Japanese', 'Chinese', 'Italian', 'Mexican', 'Burgers', 'Seafood', 'Tacos'];
    // const defaultTerm = foods[Math.floor(Math.random() * foods.length)];

    fetchResults();
  }, []);

  return { fetchResults, results, errorMsg };
};

export default useResults;

