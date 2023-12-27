import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.dummyText}></Text> */}
      <Button title="tap" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  dummyText: { margin: 20, borderWidth: 2, borderColor: "red", padding: 20 },
});
