import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useResults from '../hooks/useResults';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchApi, results, errorMsg] = useResults();

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
