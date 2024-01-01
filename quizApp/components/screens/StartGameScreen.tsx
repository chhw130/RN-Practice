import React from "react";
import { Text, TextInput, View } from "react-native";
import MainButton from "../MainButton";

const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <MainButton>Reset</MainButton>
      <MainButton>Start!</MainButton>
    </View>
  );
};

export default StartGameScreen;
