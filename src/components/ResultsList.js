import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>
        }}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
