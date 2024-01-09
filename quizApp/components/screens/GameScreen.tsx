import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../Title";
import NumberContainer from "../NumberContainer";
import MainButton from "../MainButton";
import Card from "../Card";
import { Ionicons } from "@expo/vector-icons";

export type DirectionType = "Lower" | "Higher";

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number | (() => any) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({
  userNumber,
  gameOverHandler,
}: {
  userNumber: number;
  gameOverHandler: () => void;
}) => {
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: DirectionType) => {
    if (
      (direction === "Lower" && currentGuess < userNumber) ||
      (direction === "Higher" && currentGuess > userNumber)
    ) {
      return Alert.alert("Don't lie!", "You know wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }
    if (direction === "Lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const num = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(num);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text>Highher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this, "Lower")}>
              <Ionicons name="md-remove" size={24} />
            </MainButton>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this, "Higher")}>
              <Ionicons name="md-add" size={24} />
            </MainButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24 },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
