import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";

const MainButton = ({ title, bgColor }) => {
  const buttonStyle = StyleSheet.flatten([
    styles.mainButton,
    { backgroundColor: bgColor },
  ]);
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainButton: {
    padding: 10,
    borderRadius: 10,
  },
  title: { color: "#fff" },
});

export default MainButton;
