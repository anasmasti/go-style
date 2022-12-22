import { StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/home/Header";
import Seasons from "../components/home/Seasons";
import Trend from "../components/home/Trend";

const Home = () => {
  return (
    <SafeAreaView style={styles.headerSection}>
      <Header />
      <Trend />
      <Seasons />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    flex: 1,
  },
});

export default Home;
