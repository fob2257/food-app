import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import ResultsDetail from './ResultsDetail';

const ResultsList = ({ navigation, title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item, index }) =>
          // <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
          <ResultsDetail result={item} />
          // </TouchableOpacity>
        }
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  containerStyle: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
