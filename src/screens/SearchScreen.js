import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import yelp from '../api/yelp';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [results, setResults] = useState([]);

  const onSearchSubmit = async (term = '') => {
    const response = await yelp.get('/search', {
      params: {
        term,
        limit: 50,
        location: 'Hermosillo, Sonora',
      },
    });

    const { data: { business } } = response;
    setResults(business);
  };

  return (
    <View>
      <SearchBar onSubmit={onSearchSubmit} />
      <Text>Search Screen</Text>
      <Text>{`Found ${results.length} results!`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
