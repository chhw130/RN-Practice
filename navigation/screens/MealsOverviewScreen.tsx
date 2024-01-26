import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealsOverviewScreen = () => {
  return (
    <View style={styles.constainer}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});
