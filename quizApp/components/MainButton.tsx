import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const MainButton = ({ children }: { children: ReactNode }) => {
  const pressBtnHandler = () => {
    console.log(1);
  };
  return (
    <Pressable onPress={pressBtnHandler} style={styles.buttonContainer}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#7206fc",
    borderRadius: 26,
    pointerEvents: "auto",
    paddingVertical: 8,
    margin: 4,
    width: "80%",
  },
  buttonText: {
    textAlign: "center",
  },
});
