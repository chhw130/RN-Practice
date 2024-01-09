import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../Title";
import NumberContainer from "../NumberContainer";
import MainButton from "../MainButton";

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

const GameScreen = ({ userNumber }: { userNumber: number }) => {
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

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
      <View>
        <Text>Highher or Lower?</Text>
        <View>
          <MainButton onPress={nextGuessHandler.bind(this, "Lower")}>
            -
          </MainButton>
          <MainButton onPress={nextGuessHandler.bind(this, "Higher")}>
            +
          </MainButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24 },
});
