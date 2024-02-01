import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface MealDetailsProps {
  duration: string;
  complexity: string;
  affordability: string;
}

const MealDetails = ({
  duration,
  complexity,
  affordability,
}: MealDetailsProps) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity}</Text>
      <Text style={styles.detailItem}>{affordability}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
