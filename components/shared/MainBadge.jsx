import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MainBadge = ({ title, color }) => {
  const badgeStyle = StyleSheet.flatten([
    style.badge,
    { backgroundColor: color },
  ]);

  return (
    <View style={badgeStyle}>
      <Text style={style.badgeTitle}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  badge: {
    borderRadius: 10,
    alignItems: "center",
  },
  badgeTitle: {
    color: "#fff",
    fontSize: 12,
  },
});

export default MainBadge;
