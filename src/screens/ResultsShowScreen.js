import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

import useResult from '../hooks/useResult';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { result, errorMsg } = useResult(id);

  // useEffect(() => {
  //   console.log(result);

  // }, [result]);

  return result ? (
    <View>
      <Text>{result.name}</Text>
      {
        errorMsg ? <Text>{errorMsg}</Text>
          : null
      }
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) =>
          <Image
            style={styles.imageStyle}
            source={{ uri: item }}
          />
        }
      />
    </View>
  ) : null;
};


const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
