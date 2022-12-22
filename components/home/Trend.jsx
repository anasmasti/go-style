import { ScrollView, View } from "react-native";
import MainCard from "../shared/MainCard";
import MainTitle from "../shared/MainTitle";

const Trend = ({ title }) => {
  return (
    <View>
      <MainTitle title={title} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 17, 45].map((item) => (
          <MainCard key={item} type="regular" />
        ))}
      </ScrollView>
    </View>
  );
};

export default Trend;
