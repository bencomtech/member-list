import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import {
  Feather,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import axios from "axios";

const ShowResultsScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = route.params;

  const getResult = async (id) => {
    try {
      const { data } = await axios({
        url: `https://powerful-reef-47354.herokuapp.com/members/${id}`,
      });

      setResult(data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Image
          style={styles.image}
          source={{
            uri: `https://murmuring-mountain-39162.herokuapp.com/images/${result.id}/s/${result.image_name}`,
          }}
        />
        <View style={styles.content}>
          <Text style={styles.name}>
            {result.firstname.th} {result.lastname.th}
          </Text>
          <Text>
            {result.firstname.en} {result.lastname.en}
          </Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.item}>
            <Feather name="instagram" size={24} color="black" />
            <Text style={styles.itemText}>{result.instagram}</Text>
          </View>
          <View style={styles.item}>
            <FontAwesome5 name="birthday-cake" size={24} color="black" />
            <Text style={styles.itemText}>{result.birthDay}</Text>
          </View>
          <View style={styles.item}>
            <Entypo name="address" size={24} color="black" />
            <Text style={styles.itemText}>{result.province}</Text>
          </View>
          <View style={styles.item}>
            <Feather name="play" size={24} color="black" />
            <Text style={styles.itemText}>{result.hobbies}</Text>
          </View>
          <View style={styles.item}>
            <Feather name="heart" size={24} color="black" />
            <Text style={styles.itemText}>{result.likes}</Text>
          </View>
          <View style={styles.item}>
            <MaterialCommunityIcons
              name="human-male-height"
              size={24}
              color="black"
            />
            <Text style={styles.itemText}>{result.height} cm.</Text>
          </View>
          <View style={styles.item}>
            <Entypo name="tag" size={24} color="black" />
            <Text style={styles.itemText}>Generation {result.generation}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  content: {
    alignItems: "center",
  },
  detail: {
    marginTop: 15,
    backgroundColor: "#fff",
    padding: 15,
    width: "90%",
  },
  item: {
    marginBottom: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemText: {
    marginLeft: 10,
    lineHeight: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ShowResultsScreen;
