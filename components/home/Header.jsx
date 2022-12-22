import { View, StyleSheet } from "react-native";
import Logo from "../shared/Logo";
import MainButton from "../shared/MainButton";
import Icon from "react-native-vector-icons/Fontisto";

const heartIcon = <Icon name="heart-alt" size={25} color="#ff5c88" />;

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo />
      <MainButton title={heartIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingTop: 50,
  },
});
export default Header;
