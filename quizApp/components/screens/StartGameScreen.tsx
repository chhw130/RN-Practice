import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MainButton from "../MainButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
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

    /**android */
    elevation: 30,
  },
});
