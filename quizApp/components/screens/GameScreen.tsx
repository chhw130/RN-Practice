import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../Title";
import NumberContainer from "../NumberContainer";
import MainButton from "../MainButton";
import Card from "../Card";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../game/GuessLogItem";

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
  gameOverHandler: (numberOfRounds: number) => void;
}) => {
  const { height, width } = useWindowDimensions();
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler(guessRounds.length);
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
    setGuessRounds((prevGuessRound) => [...prevGuessRound, num]);
  };

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
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
    </>
  );

  if (width > 500) {
    content = (
      <View>
        <Text>Highher or Lower?</Text>
        <View style={styles.buttonContainerWide}>
          <MainButton onPress={nextGuessHandler.bind(this, "Lower")}>
            <Ionicons name="md-remove" size={24} />
          </MainButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <MainButton onPress={nextGuessHandler.bind(this, "Higher")}>
            <Ionicons name="md-add" size={24} />
          </MainButton>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.progressContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => String(item) as string}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, alignItems: "center" },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  progressContainer: {
    marginVertical: 3,
    flex: 1,
  },

  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
