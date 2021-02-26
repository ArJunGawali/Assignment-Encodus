import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxImgContainer}>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://png.pngtree.com/png-vector/20190515/ourlarge/pngtree-realistic-yellow-sports-car-silhouette-png-image_1019873.jpg",
          }}
        />
        <View style={styles.box}>
          <Text style={{ flex: 1, fontWeight: "bold", fontSize: 16 }}>
            Product Name
          </Text>
          <Text style={{ flex: 4 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
      </View>
      <View style={styles.detailsText}>
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>
          See Details
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  boxImgContainer: {
    flexDirection: "row",
  },
  img: {
    height: 200,
    width: 170,
  },
  box: {
    height: 200,
    width: 170,
    backgroundColor: "#d7f5f0",
    padding: 15,
    borderRightColor: "black",
    borderTopColor: "black",
    borderRightWidth: 2,
    borderTopWidth: 2,
  },
  container: {
    margin: 10,
  },
  detailsText: {
    height: 40,
    width: 340,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
