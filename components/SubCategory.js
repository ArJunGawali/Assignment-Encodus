import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubCategory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>SubCategory</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>SubCategory</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>SubCategory</Text>
      </View>
    </View>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 100,
    borderRadius: 10,
    backgroundColor: "#17d4b4",
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
