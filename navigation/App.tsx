import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
type RootStackParamList = {
  MealsCategories: undefined;
  Meal: { categoryId: string };
};

export type MealsCategoriesProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsCategories"
>;
export type MealsProps = NativeStackScreenProps<RootStackParamList, "Meal">;

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
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
            //   const params: ParamsProps = route.params;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
