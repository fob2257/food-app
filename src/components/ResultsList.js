import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item, index }) =>
          <ResultsDetail
            key={item.id}
            result={item}
          />
        }
        horizontal
      />
    </View >
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
