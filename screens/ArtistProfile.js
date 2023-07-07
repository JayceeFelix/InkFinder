import { Text, Image, ScrollView, StyleSheet, View } from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ArtistProfile() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.logo}
        ></Image>

        <View style={styles.perfil}>
          <Image
            source={require("../feed_photos/1_1.png")}
            style={styles.profilePicture}
          ></Image>
          <Text style={styles.nome}> Fernando </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}> Sobre </Text>
          <Text>Artista cearense, especialista em Blackwork</Text>
          <Text style={styles.infoTitle}> Endereço </Text>
          <Text>
            Rua Marcos Macêdo, 655 - loja 8 - Aldeota, Fortaleza - CE, 60150-190
          </Text>
        </View>
        <View>
        <Image
          style={styles.Image}
          source={require("../feed_photos/image_1.png")}
        />
        <Image
          style={styles.Image}
          source={require("../feed_photos/image_2.png")}
        />
        <Image
          style={styles.Image}
          source={require("../feed_photos/image_3.png")}
        />
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    width: 80,
    height: 50,
  },
  perfil: {
    flexDirection: "row",
  },
  profilePicture: {
    flex: 0,
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 50,
  },
  nome: {
    flex: 2,
    fontSize: 20,
    marginTop: 30,
  },
  infoContainer: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
  },
  infoTitle: {
    fontSize: 16,
    marginTop: 3,
    marginBottom: 6,
    fontWeight: 500,
  },
  Image: {
    alignSelf: "center",
    maxHeight: windowHeight / 2,
    maxWidth: windowWidth - 50,
    margin: 15
  }
});
