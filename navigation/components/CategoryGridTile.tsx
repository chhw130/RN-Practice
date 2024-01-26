import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

interface CategoryGridTile {
  title: string;
  color: string;
  onPress: () => void;
}

const CategoryGridTile = ({ title, color, onPress }: CategoryGridTile) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    /**android클릭효과가 모서리를 안넘어옴 */
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
});
