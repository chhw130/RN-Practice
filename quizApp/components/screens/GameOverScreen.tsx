import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../Title";
import Colors from "../../utils/Colors";
import MainButton from "../MainButton";

const GameOverScreen = ({ roundsNubmer, userNumber, onStartNewGame }: any) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Over!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/howYouLive.jpeg")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone neede <Text style={[styles.highlight]}>{roundsNubmer}</Text>{" "}
        round to guess the number{" "}
        <Text style={[styles.highlight]}>{userNumber}</Text>.
      </Text>
      <View>
        <MainButton onPress={onStartNewGame}>Start New Game</MainButton>
      </View>
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
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 23,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
