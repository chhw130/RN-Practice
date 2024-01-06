import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const MainButton = ({
  children,
  inputValidation,
}: {
  children: ReactNode;
  inputValidation?: () => void;
}) => {
  const pressBtnHandler = () => {};
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={inputValidation}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "red" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 26,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#52106e",
    borderRadius: 26,
    pointerEvents: "auto",
    paddingVertical: 8,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },

  pressed: {
    opacity: 0.75,
  },
});
