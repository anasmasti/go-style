import { View, Text, StyleSheet } from "react-native";
import MainButton from "../shared/MainButton";

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Hijaby</Text>
        <MainButton title="fav" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default Header;
