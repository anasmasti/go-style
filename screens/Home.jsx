import { StyleSheet, SafeAreaView } from "react-native";
import WithTitle from "../components/HOC/WithTitle";
import Header from "../components/home/Header";
import Seasons from "../components/home/Seasons";
import Trend from "../components/home/Trend";
const TrendWithTitle = WithTitle(Trend);
const SeasonsWithTitle = WithTitle(Seasons);

const Home = () => {
  return (
    <SafeAreaView style={styles.headerSection}>
      <Header />
      <TrendWithTitle datatype="trend" />
      <SeasonsWithTitle datatype="season" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    flex: 1,
  },
});

export default Home;
