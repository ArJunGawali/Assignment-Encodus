import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Explore = () => {
  return (
    <View style={styles.explore}>
      <View style={styles.catConainer}>
        <View style={styles.categories}>
          <Ionicons name="list-sharp" size={20} color="orange" />
          <Text style={{ fontWeight: "bold" }}>Categories</Text>
          <Ionicons name="chevron-down-sharp" size={20} color="orange" />
        </View>
        <View style={styles.location}>
          <Ionicons name="location" size={20} color="orange" />
          <Text style={{ fontWeight: "bold" }}>Jorden</Text>
          <Ionicons color="orange" size={20} name="chevron-down-sharp" />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={{
            width: 250,
            height: 40,
            backgroundColor: "white",
            padding: 15,
          }}
          placeholder="What are you looking for ?"
          padding="20"
        />
        <View
          style={{
            backgroundColor: "orange",
            width: 42,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="search" size={25} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  explore: {
    flex: 1,
    height: 300,
    backgroundColor: "#40464d",
    padding: "20",
  },

  categories: {
    flexDirection: "row",
    width: "40%",
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginHorizontal: 2,
  },
  location: {
    flexDirection: "row",
    width: "40%",
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginHorizontal: 2,
  },
  catConainer: {
    flexDirection: "row",
    margin: "10",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 15,
  },
});
