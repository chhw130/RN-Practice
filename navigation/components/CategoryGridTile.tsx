import React from "react";
import { Pressable, Text, View } from "react-native";

interface CategoryGridTile {
  title: string;
  color: string;
}

const CategoryGridTile = ({ title, color }: CategoryGridTile) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
