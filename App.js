import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./components/Header";
import Img from "./components/Img";
import Explore from "./components/Explore";
import SpecialText from "./components/SpecialText";
import SubCategory from "./components/SubCategory";
import Card from "./components/Card";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title="Albalad Market Logo" />
        <Img />
        <Explore />
        <SpecialText text="Displaying Result for : Sub Category" />
        <SubCategory />
        <SpecialText text="Filters" />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
