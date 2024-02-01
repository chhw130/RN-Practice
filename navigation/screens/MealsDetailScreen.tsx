import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MealDeatilProps } from "../App";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MealsDetailScreen = ({ route }: MealDeatilProps) => {
  const mealId = route.params.meailId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
        <Text style={styles.title}>{selectedMeal?.title}</Text>
        <MealDetails
          affordability={selectedMeal?.affordability}
          complexity={selectedMeal?.affordability}
          duration={selectedMeal?.duration}
          textColor={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal?.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal?.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default MealsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
