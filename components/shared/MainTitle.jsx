import { Text, StyleSheet } from "react-native";
import React from "react";

const MainTitle = ({ title }) => {
  return <Text style={style.title}>{title}</Text>;
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 8,
  },
});
export default MainTitle;
