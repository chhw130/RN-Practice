import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-count";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const { ids } = useContext(FavoritesContext);

  const favoriteMealsList = MEALS.filter((meal) => ids.includes(meal.id));

  return (
    <>
      {favoriteMealsList.length > 0 ? (
        <MealsList items={favoriteMealsList} />
      ) : (
        <View style={styles.rootContainer}>
          <Text style={styles.text}>No Food!!</Text>
        </View>
      )}
    </>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
