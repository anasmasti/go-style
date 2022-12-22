import { Text, ScrollView } from "react-native";
import MainCard from "../shared/MainCard";

const Trend = () => {
  return (
    <ScrollView horizontal>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 17, 45].map((item) => (
        <MainCard key={item} />
      ))}
    </ScrollView>
  );
};

export default Trend;
