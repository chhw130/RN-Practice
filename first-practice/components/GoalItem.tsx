import { Pressable, StyleSheet, Text, View } from "react-native";
import { GoalType } from "../App";

interface GoalInputPropsType {
  goal: GoalType;
  removeGoalHandler: (targetGoal: GoalType) => void;
}

const GoalInput = ({ goal, removeGoalHandler }: GoalInputPropsType) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "red" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => removeGoalHandler(goal)}
      >
        <Text style={styles.goalItemText}>{goal.text}</Text>
      </Pressable>
    </View>
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
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: "white",
    textAlign: "center",
  },
});
