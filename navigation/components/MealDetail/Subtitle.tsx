import React, { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

interface SubtitleProps {
  children: ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    margin: 4,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    marginVertical: 4,
  },
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
