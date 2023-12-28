import {
  Button,
  ListRenderItemInfo,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { GoalType } from "../App";
import { useState } from "react";

interface GoalInputPropsType {
  addGoalHandler: (enteredGoalText: string) => void;
  isOpen: boolean;
}

const GoalInput = ({ addGoalHandler, isOpen }: GoalInputPropsType) => {
  const [enteredGoalText, setEneteredGoalText] = useState<string>("");

  const goalInputHandler = (enteredText: string) => {
    setEneteredGoalText(enteredText);
  };

  const addGoal = () => {
    addGoalHandler(enteredGoalText);
    setEneteredGoalText("");
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="목표를 입력해주세요!"
          value={enteredGoalText}
        />
        <Button onPress={addGoal} title="submit" />
      </View>
    </Modal>
  );
};

export default GoalInput;

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
});
