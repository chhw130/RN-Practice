import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import MainButton from "../MainButton";

const StartGameScreen = () => {
  const [inputNumber, setInputNumber] = useState("");

  const numberInputHandler = (number: string) => {
    setInputNumber(inputNumber);
  };

  const inputValidation = () => {
    const choseNumber = parseInt(inputNumber);

    const resetInputHandler = () => {
      setInputNumber("");
    };

    if (isNaN(choseNumber) || choseNumber > 99 || choseNumber <= 0) {
      Alert.alert("Please Input validate Number!!", "", [
        { text: "확인", style: "destructive", onPress: resetInputHandler },
      ]);
    }
  };
  return (
    <View style={styles.inputContainer}>
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
          <MainButton inputValidation={inputValidation}>Start!</MainButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#72063c",
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    /**ios */
    shadowColor: "black",
    shadowOffset: { width: 20, height: 20 },
    shadowRadius: 20,
    shadowOpacity: 0.5,
    /**androids */
    elevation: 30,
  },

  numberInput: {
    height: 50,
    fontSize: 30,
    width: 40,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
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
