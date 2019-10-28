import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useResults from '../hooks/useResults';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const { searchApi, results, errorMsg } = useResults();

  const filterByPrice = price =>
    results.filter(result => {
      const resultPrice = result.price || '$$';
      return resultPrice === price;
    });

  // console.log(results.map(({
  //   name,
  //   price,
  //   image_url,
  //   categories,
  // }) => ({
  //   name,
  //   price,
  //   image_url,
  //   categories,
  // })));

  return (
    <View>
      <SearchBar onSubmit={searchApi} />
      <Text>Search Screen</Text>
      <Text>{`Found ${results.length} results!`}</Text>
      {
        errorMsg ? <Text>{errorMsg}</Text>
          : null
      }
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
