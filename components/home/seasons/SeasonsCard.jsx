import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const SeasonsCard = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_y_4Xm8V0O07ToGTW6YZ0IozqMCdQzDtbaw&usqp=CAU",
      }}
      borderRadius={18}
      style={style.cover}
    >
      <Text style={style.title}>Winter</Text>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  cover: {
    height: 100,
    width: 200,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default SeasonsCard;
