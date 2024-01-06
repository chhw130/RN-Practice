import React, { Children, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../utils/Colors";

const Title = ({ children }: { children: ReactNode }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
