import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./components/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./components/screens/GameScreen";

export default function App() {
  const [pickNumber, setPickNumber] = useState<string | number>("");

  const pickNumberHandler = (number: number) => {
    setPickNumber(number);
  };

  let screen = <StartGameScreen pickNumberHandler={pickNumberHandler} />;

  if (pickNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
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
