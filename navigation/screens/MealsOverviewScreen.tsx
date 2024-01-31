import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface MealsOverviewScreenPropsType {
  key: string;
  name: string;
  params: { categoryId: string };
  path: string;
}

const MealsOverviewScreen = ({
  route,
}: {
  route: MealsOverviewScreenPropsType;
}) => {
  const catId = route.params.categoryId;
  return (
    <View style={styles.constainer}>
      <Text>Meals Overview Screen{catId}</Text>
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
