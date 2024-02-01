import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Meal from "../../models/meal";

interface ListProps {
  data: string[] | undefined;
}

const List = ({ data }: ListProps) => {
  return data?.map((dataPoint: string) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
  },
});
