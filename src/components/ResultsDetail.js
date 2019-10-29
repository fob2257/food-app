import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  const uri = result.image_url ? result.image_url
    : 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png';

  return (
    <View style={styles.containerStyle}>
      <Image
        style={styles.imageStyle}
        source={{ uri }}
      />
      <Text style={styles.nameStyle}>
        {result.name}
      </Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  containerStyle: {
    marginLeft: 15,
  },
});

export default ResultsDetail;
