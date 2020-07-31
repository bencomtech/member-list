import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://murmuring-mountain-39162.herokuapp.com/images/${result.id}/s/${result.image_name}`,
        }}
      />
      <Text
        style={styles.name}
      >{`${result.firstname.th} ${result.lastname.th}`}</Text>
      <Text>{`${result.firstname.en} ${result.lastname.en}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
