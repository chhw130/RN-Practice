import React, { ReactNode } from "react";
import { Text, View } from "react-native";

const MainButton = ({ children }: { children: ReactNode }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default MainButton;
