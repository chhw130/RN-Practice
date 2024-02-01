import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  MealsCategories: undefined;
  Meal: { categoryId: string };
  MealDetail: { meailId: string };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type MealsCategoriesProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsCategories"
>;
export type MealsProps = NativeStackScreenProps<RootStackParamList, "Meal">;

export type MealDeatilProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetail"
>;

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meals Category",
            }}
          />
          <Stack.Screen
            name="Meal"
            component={MealsOverviewScreen}
            // options={({ route }) => {
            //   const params = route.params.categoryId;

            //   return {
            //     title: `Category - ${params}`,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealsDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
