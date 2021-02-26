import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Img = () => {
  return (
    <View style={styles.Img}>
      <Image
        style={{ height: "100%" }}
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dX4lOPi3JOP2Pz-27eOcgv4roAZeLznqzg&usqp=CAU",
        }}
      />
    </View>
  );
};

export default Img;

const styles = StyleSheet.create({
  Img: {
    height: 150,
  },
});
