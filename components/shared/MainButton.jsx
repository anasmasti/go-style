import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";

const MainButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.mainButton}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 10,
  },
  title: { color: "#fff" },
});

export default MainButton;
