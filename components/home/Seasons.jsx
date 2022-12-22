import { View, ScrollView } from "react-native";
import MainTitle from "../shared/MainTitle";
import MainCard from "../shared/MainCard";

const Seasons = () => {
  return (
    <View>
      <MainTitle title="Seasons" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <MainCard type="image" />
        <MainCard type="image" />
        <MainCard type="image" />
      </ScrollView>
    </View>
  );
};

export default Seasons;
