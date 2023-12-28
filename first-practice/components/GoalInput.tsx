import {
  Button,
  Image,
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
  endAddGoalHandler: () => void;
  isOpen: boolean;
}

const GoalInput = ({
  addGoalHandler,
  endAddGoalHandler,
  isOpen,
}: GoalInputPropsType) => {
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
        <Image
          style={styles.image}
          source={require("../assets/how-you-live.jpeg")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="목표를 입력해주세요!"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoal} title="submit" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={endAddGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 15,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
