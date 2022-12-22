import { View, Text, ScrollView } from "react-native";
import MainTitle from "../shared/MainTitle";
import SeasonsCard from "./seasons/SeasonsCard";

const Seasons = () => {
  return (
    <View>
      <MainTitle title="Seasons" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SeasonsCard />
        <SeasonsCard />
        <SeasonsCard />
        <SeasonsCard />
      </ScrollView>
    </View>
  );
};

export default Seasons;
