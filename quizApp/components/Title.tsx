import React, { Children, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children }: { children: ReactNode }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 27,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 15,
    maxWidth: "80%",
    width: 300,
  },
});
