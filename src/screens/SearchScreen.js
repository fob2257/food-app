import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import yelp from '../api/yelp';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
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

  return (
    <View>
      <SearchBar onSubmit={searchApi} />
      <Text>Search Screen</Text>
      <Text>{`Found ${results.length} results!`}</Text>
      {
        errorMsg ? <Text>{errorMsg}</Text>
          : null
      }
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
