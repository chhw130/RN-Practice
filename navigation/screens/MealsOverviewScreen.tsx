import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { MealsProps } from "../App";

export interface MealItemProps {
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

  const renderMealItem = (itemData: any) => {
    const item: MealItemProps = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.constainer}>
      <Text>Meals Overview Screen - {catId}</Text>
      <View>
        <FlatList
          data={displayedMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        ></FlatList>
      </View>
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
