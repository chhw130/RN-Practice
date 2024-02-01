import React from "react";
import { Image, Text, View } from "react-native";
import { MealDeatilProps } from "../App";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealsDetailScreen = ({ route }: MealDeatilProps) => {
  const mealId = route.params.meailId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <>
      <View>
        <Image source={{ uri: selectedMeal?.imageUrl }} />
        <Text>{selectedMeal?.title}</Text>
        <MealDetails
          affordability={selectedMeal?.affordability}
          complexity={selectedMeal?.affordability}
          duration={selectedMeal?.duration}
        />
        <View>
          <Text>Ingredients</Text>
          {selectedMeal?.ingredients.map((ingredient: string) => (
            <Text key={ingredient}>{ingredient}</Text>
          ))}
          <Text>Steps</Text>
          {selectedMeal?.steps.map((step: string) => (
            <Text key={step}>{step}</Text>
          ))}
        </View>
      </View>
    </>
  );
};
export default MealsDetailScreen;
