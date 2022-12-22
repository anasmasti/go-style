import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View>
      <Text style={style.title}>GoStyle</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default Logo;
