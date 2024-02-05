import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { MealsProps } from "../App";
import MealsList from "../components/MealsList/MealsList";

export interface MealItemProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: string;
  complexity: string;
  affordability: string;
}

const MealsOverviewScreen = ({ route, navigation }: MealsProps) => {
  const catId = route.params.categoryId;

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((ele) => {
      return ele.id === catId;
    })?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
