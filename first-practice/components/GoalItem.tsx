import { Pressable, StyleSheet, Text, View } from "react-native";
import { GoalType } from "../App";

interface GoalInputPropsType {
  goal: GoalType;
  removeGoalHandler: (targetGoal: GoalType) => void;
}

const GoalInput = ({ goal, removeGoalHandler }: GoalInputPropsType) => {
  return (
    <Pressable onPress={() => removeGoalHandler(goal)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{goal.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
