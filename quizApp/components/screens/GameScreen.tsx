import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../Title";
import NumberContainer from "../NumberContainer";

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

const GameScreen = ({ userNumber }: { userNumber: number }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Highher or Lower?</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24 },
});
