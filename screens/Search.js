import "react-native-gesture-handler";
import "react-native-vector-icons";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  Image,
  TextInput,
  Modal,
  FlatList,
  Alert,
  StyleSheet,
  View,
} from "react-native";
import { Pressable, TouchableOpacity, Dimensions } from "react-native";
import Checkbox from "expo-checkbox";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import tattooArtist from "../data/tattooArtist";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


function Item({ item, navigation }) {
  return (
    <View style={styles.card}>
      <Image source={item.fotos[0]} style={styles.profilePicture}></Image>
      <View style={styles.estilos}>
        <Text style={styles.profileName}>{item.nome} </Text>
        {item.estilos.map((item) => (
          <Text>{item}</Text>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("ArtistProfile")}>
        <Image
          source={require("../assets/more_horizontal.png")}
          style={styles.icon}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}

export default function Search({ navigation }) {
  console.log(navigation)
  const [modalVisible, setModalVisible] = useState(false); //modal variables
  const [isChecked, setChecked] = useState(false); // checkbox variables
  const [searchText, setSearchText] = useState(""); // variable gets information from text box
  const data = tattooArtist; //defines json data that has tattoo artists data
  const [list, setList] = useState(data); //defines json data that has tattoo artists data

  useEffect(
    () => {
      if (searchText === "") {
        setList(data);
      } else {
        setList(
          data.filter((item) => {
            console.log(item.nome);
            if (item.nome.indexOf(searchText) > -1) {
              return true;
            } else {
              return false;
            }
          })
        );
      }
    },
    { searchText }
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Pressable
          title="Buscar"
          style={styles.button}
          onPress={() => navigation.navigate("Feed")}
        >
          <Text style={styles.buttonText}> Feed </Text>
        </Pressable>
        <Pressable title="Buscar" style={styles.button}>
          <Text style={styles.buttonText}> Buscar </Text>
        </Pressable>
      </View>
      <View style={styles.caixaDeBusca}>
        <TextInput
          style={styles.textinput}
          onChangeText={(t) => setSearchText(t)}
          value={searchText}
        ></TextInput>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={require("../assets/filter.png")}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item item={item} navigation={navigation} />}
        ></FlatList>
      </View>

      <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.filterTitle}>Filtro</Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />
              <Text style={styles.label}> Blackwork</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />

              <Text style={styles.label}> Geometrica</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />

              <Text style={styles.label}> Glitch</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />

              <Text style={styles.label}> Maori</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />

              <Text style={styles.label}> Minimalista</Text>
            </View>
            <View style={styles.modalIcon}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Image
                  source={require("../assets/close.png")}
                  style={styles.icon}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

function searchFilters() {
  console.log("Opened filter modal");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonView: {
    flex: 0.1, //this makes the buttons take less space than if it were 1 or 2
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
  },
  caixaDeBusca: {
    flex: 0, //this makes the buttons take less space than if it were 1 or 2
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    height: 35,
    padding: 5,
    backgroundColor: "#fff",
  },
  textinput: {
    minWidth: 100,
    height: 30,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    alignSelf: "flex-end",
  },
  centeredView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    height: 360,
    width: 210,
    margin: 30,
    borderWidth: 2,
    borderRadius: 10,
  },
  filterTitle: {
    margin: 5,
    fontSize: 26,
  },
  modalIcon: {
    flex: 2,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  checkboxContainer: {
    flex: 0.5,
    flexDirection: "row",
  },
  card: {
    width: windowWidth - 50,
    flex: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    margin: 5,
    padding: 10,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
  },
  estilos: {
    flexDirection: "column",
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});
