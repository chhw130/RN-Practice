import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../utils/Colors";

const Card = ({ children }: { children: ReactNode }) => {
  return <View style={styles.rootContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    /**ios */
    shadowColor: "black",
    shadowOffset: { width: 20, height: 20 },
    shadowRadius: 20,
    shadowOpacity: 0.5,
    /**androids */
    elevation: 30,
  },
});
