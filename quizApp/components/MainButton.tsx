import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { DirectionType } from "./screens/GameScreen";

const MainButton = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: () => void | ((direction: DirectionType) => void);
}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
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
    marginVertical: 20,
    borderRadius: 26,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#52106e",
    borderRadius: 26,
    pointerEvents: "auto",
    paddingVertical: 8,
    paddingHorizontal: 20,
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
