import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface MealDetailsProps {
  duration: string;
  complexity: string;
  affordability: string;
  textColor?: {
    color: string;
  };
}

const MealDetails = ({
  duration,
  complexity,
  affordability,
  textColor,
}: MealDetailsProps) => {
  return (
    <View style={[styles.details]}>
      <Text style={[styles.detailItem, textColor]}>{duration}m</Text>
      <Text style={[styles.detailItem, textColor]}>{complexity}</Text>
      <Text style={[styles.detailItem, textColor]}>{affordability}</Text>
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
