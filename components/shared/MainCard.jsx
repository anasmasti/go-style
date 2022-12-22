import { View, Text, StyleSheet, Image } from "react-native";
import MainBadge from "./MainBadge";

const MainCard = () => {
  return (
    <View style={style.card}>
      <View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_y_4Xm8V0O07ToGTW6YZ0IozqMCdQzDtbaw&usqp=CAU",
          }}
          style={style.cover}
        />
      </View>
      <View style={style.content}>
        <Text style={style.title}>Winter Clothes</Text>
        <MainBadge title="Winter" color="red" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    marginVertical: 9,
  },
  cover: {
    width: 150,
    height: 80,
    marginHorizontal: 5,
    backgroundColor: "black",
    borderRadius: 10,
    opacity: 0.9,
    resizeMode: "cover",
  },
  content: {
    backgroundColor: "#eee",
    borderRadius: 8,
    width: 130,
    padding: 8,
    marginHorizontal: 5,
    marginTop: -20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 3,
    fontSize: 17,
  },
});

export default MainCard;