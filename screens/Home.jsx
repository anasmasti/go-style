import { StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/home/Header";
import Trend from "../components/home/Trend";

const Home = () => {
  return (
    <SafeAreaView style={styles.headerSection}>
      <Header />
      <Trend />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    flex: 1,
  },
});

export default Home;
