import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "./MealItem";
import Meal from "../../models/meal";

interface MealItemProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: string;
  complexity: string;
  affordability: string;
}

const MealsList = ({ items }: { items: Meal[] }) => {
  const renderMealItem = (itemData: any) => {
    const item: MealItemProps = itemData.item;

    const mealItemProps = {
      id: item.id,
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
      <View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </View>
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});
