import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import useResults from '../hooks/useResults';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const { fetchResults, results, errorMsg } = useResults();

  const filterByPrice = price =>
    results.filter(result => {
      const resultPrice = result.price || '$$';
      return resultPrice === price;
    });

  return (
    <View style={styles.containerStyle}>
      <SearchBar onSubmit={fetchResults} />
      <Text>{`Found ${results.length} results!`}</Text>
      {
        errorMsg ? <Text>{errorMsg}</Text>
          : null
      }
      <ScrollView>
        <ResultsList
          title='Cost Effective'
          results={filterByPrice('$')}
        />
        <ResultsList
          title='Bit Pricier'
          results={filterByPrice('$$')}
        />
        <ResultsList
          title='Big Spender'
          results={[...filterByPrice('$$$'), ...filterByPrice('$$$$')]}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // borderColor: 'red',
    // borderWidth: 10,
    flex: 1,
  },
});

export default SearchScreen;
