import Reactr from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import tattooArtist from "../data/tattooArtist";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//const imgs = require("../feed_photos/")
const data = tattooArtist //require("../data/tattooArtists.json");

function Item({ item }) {
  return (
    <View style={styles.card}>
      <Image source={item.fotos[0]} style={styles.profilePicture}></Image>
      <View style={styles.estilos}>
      <Text style={styles.profileName}>{item.nome} </Text>
        {item.estilos.map((item) => (
          <Text>{item}</Text>
        ))}
      </View>
    </View>
  );
}

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text> Perfil </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: windowWidth - 50,
    flex: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
    padding: 10,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
  },
  estilos: {
    flexDirection: "column",
  },
  profilePicture:{
    width: 60,
    height: 60
  }
});
