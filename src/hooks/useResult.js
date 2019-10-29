import { useState, useEffect } from 'react';
import Proptypes from 'prop-types';

import yelp from '../api/yelp';

const useResult = id => {
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchResult = async id => {
    try {
      const response = await yelp.get(`/${id}`);

      const { data } = response;
      setResult(data);
    } catch (error) {
      console.error(error);
      setErrorMsg('Something went wrong');
    }
  };

  useEffect(() => {
    if (id) fetchResult(id);
  }, []);

  return { fetchResult, result, errorMsg };
};

useResult.propTypes = {
  id: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
};

export default useResult;

