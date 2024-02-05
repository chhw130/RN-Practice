import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../App";
import MealDetails from "../MealDetails";
import { MealItemProps } from "../../screens/MealsOverviewScreen";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealItemProps) => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const goDetailHandler = () => {
    navigation.navigate("MealDetail", {
      meailId: id,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable
          onPress={goDetailHandler}
          android_ripple={{ color: "#eeeee" }}
          style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image style={styles.image} source={{ uri: imageUrl }} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails
              duration={duration}
              affordability={affordability}
              complexity={complexity}
            />
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS !== "android" ? "visible" : "hidden",
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  detail: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.9,
  },
});
