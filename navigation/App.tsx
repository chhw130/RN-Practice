import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

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
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const DrawerNavigater = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

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
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigater}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Meal" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealsDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
