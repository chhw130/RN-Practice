import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../Title";
import Colors from "../../utils/Colors";

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>Over!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/howYouLive.jpeg")}
        />
      </View>
      <Text>Your Phone neede X round to guess the number Y.</Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 200,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
