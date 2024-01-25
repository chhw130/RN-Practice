import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./components/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./components/screens/GameScreen";
import Colors from "./utils/Colors";
import GameOverScreen from "./components/screens/GameOverScreen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [pickNumber, setPickNumber] = useState<number>(0);
  const [gameOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return;
  }

  const pickNumberHandler = (number: number) => {
    setPickNumber(number);
    setGameOver(false);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setPickNumber(0);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen pickNumberHandler={pickNumberHandler} />;

  if (pickNumber) {
    screen = (
      <GameScreen userNumber={pickNumber} gameOverHandler={gameOverHandler} />
    );
  }

  if (gameOver && pickNumber) {
    screen = (
      <GameOverScreen
        userNumber={pickNumber}
        roundsNubmer={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <>
      <StatusBar style="inverted" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/img/question.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          {/* 노치 가리는 것 방지 */}
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
