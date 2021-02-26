import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={{ color: "white" }}>
        <Text style={{ color: "white" }}>{props.title}</Text>
      </View>
      <Ionicons name="menu-outline" size={25} color="white" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#1c3e6b",
  },
});
