import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const onSearchSubmit = (term = '') => {
    console.log('search term was submitted!');
  };

  return (
    <View style={styles.container}>
      <SearchBar onSubmit={onSearchSubmit} />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchScreen;
