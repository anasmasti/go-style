import { View, StyleSheet } from "react-native";
import Logo from "../shared/Logo";
import MainButton from "../shared/MainButton";
import Icon from "react-native-vector-icons/Fontisto";

const heartIcon = <Icon name="heart-alt" size={30} color="#ff5c88" />;

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Logo />
        <MainButton title={heartIcon} />
      </View>
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
