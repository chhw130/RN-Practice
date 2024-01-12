import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../utils/Colors";

const GuessLogItem = ({
  roundNumber,
  guess,
}: {
  roundNumber: number;
  guess: any;
}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess : {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    /**android shadow */
    elevation: 4,
    /**ios shadow */
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
