import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import MainButton from "../MainButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={99}
        keyboardType="number-pad"
        autoCapitalize="none"
      />
      <MainButton>Reset</MainButton>
      <MainButton>Start!</MainButton>
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
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginVertical: 8,
    borderBottomWidth: 10,
    width: "100%",
    textAlign: "center",
  },
});
