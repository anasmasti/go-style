import { View, ScrollView } from "react-native";
import MainTitle from "../shared/MainTitle";
import MainCard from "../shared/MainCard";

const Seasons = ({ title }) => {
  return (
    <View>
      <MainTitle title={title} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <MainCard type="image" />
        <MainCard type="image" />
        <MainCard type="image" />
      </ScrollView>
    </View>
  );
};

export default Seasons;
