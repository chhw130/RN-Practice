import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEneteredGoalText] = useState<string>("");
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setEneteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoalText);

    // setCourseGoals([...corseGoals, enteredGoalText]);
    setCourseGoals((oldGoals) => [...oldGoals, enteredGoalText]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="목표를 입력해주세요!"
        />
        <Button onPress={addGoalHandler} title="submit" />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal, idx) => (
            <View style={styles.goalItem} key={idx}>
              <Text style={styles.goalItemText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
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
