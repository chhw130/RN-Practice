import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export interface GoalType {
  text: string;
  id: number;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<GoalType[]>([]);

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((oldGoals) => [
      ...oldGoals,
      { text: enteredGoalText, id: Math.random() },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <GoalInput addGoalHandler={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(goal) => <GoalItem goal={goal.item} />}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 15,
  },
  goalsContainer: {
    flex: 4,
    paddingBottom: 30,
  },
  goalItem: {
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "black",

    margin: 3,
  },
  goalItemText: {
    color: "white",
    textAlign: "center",
  },
});
