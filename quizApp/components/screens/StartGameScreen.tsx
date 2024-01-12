import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import MainButton from "../MainButton";
import Colors from "../../utils/Colors";
import Title from "../Title";
import Card from "../Card";

const StartGameScreen = ({
  pickNumberHandler,
}: {
  pickNumberHandler: (number: number) => void;
}) => {
  const [inputNumber, setInputNumber] = useState("");

  const numberInputHandler = (number: string) => {
    setInputNumber(number);
  };

  const resetInputHandler = () => {
    setInputNumber("");
  };

  const inputValidation = () => {
    const choseNumber = parseInt(inputNumber);

    if (isNaN(choseNumber) || choseNumber > 99 || choseNumber <= 0) {
      return Alert.alert("Please Input validate Number!!", "", [
        { text: "확인", style: "destructive", onPress: resetInputHandler },
      ]);
    }

    pickNumberHandler(choseNumber);
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <Title>Guess My Number</Title>
      </View>
      <Card>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={99}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={inputNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <MainButton>Reset</MainButton>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton onPress={inputValidation}>Start!</MainButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },

  numberInput: {
    height: 50,
    fontSize: 30,
    width: 40,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
    borderBottomWidth: 5,
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});
