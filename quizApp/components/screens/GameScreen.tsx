import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: DirectionType) => {
    if (direction === "Lower") {
      maxBoundary = currentGuess;
    }
    if (direction === "Higher") {
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
          <MainButton onPress={() => nextGuessHandler("Higher")}>+</MainButton>
          <MainButton onPress={() => nextGuessHandler("Lower")}>-</MainButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24 },
});
