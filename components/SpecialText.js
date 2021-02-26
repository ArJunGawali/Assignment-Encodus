import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SpecialText = (props) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default SpecialText;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bolder",
    padding: 15,
    color: "white",
    alignText: "center",
    fontSize: 17,
  },
  textContainer: {
    backgroundColor: "#1c3e6b",

    marginVertical: 10,
    alignItems: "center",
    height: 50,
  },
});
