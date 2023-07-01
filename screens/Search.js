import "react-native-gesture-handler";
import "react-native-vector-icons";
import * as React from "react";
import { useState } from "react";
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
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-vector-icons";
import CheckBox from "@react-native-community/checkbox"
import Checkbox from "expo-checkbox"
import SearchModal from "../screens/SearchModal";

export default function Search({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  
  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Pressable title="Buscar" style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}> Feed </Text>
        </Pressable>
        <Pressable title="Buscar" style={styles.button}  >
          <Text style={styles.buttonText}> Buscar </Text>
        </Pressable>
        </View> 
      <View style={styles.caixaDeBusca}>
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
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                  />
                  <Text style={styles.label}>Estilo Y</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                  />
                  <Text style={styles.label}>Blackwork</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                  />
                  <Text style={styles.label}>Estilo X</Text>
                </View>
              
            </View>
          </View>
        </Modal>
        <TextInput style={styles.textinput}></TextInput>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={require("../assets/filter.png")}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
      </View>
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
  buttonView:{
    flex:2,
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5
  },
  buttonText: {
    color: "#000",
    fontSize: 20
  },
  caixaDeBusca: {
    flex: 3,
    flexDirection: "row",
    marginTop: 15,
  },
  textinput: {
    borderColor: "#000",
    borderWidth: 0.5,
    padding: 3,
    minWidth: 100,
    height: 30,
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 10,
    alignSelf: "flex-end",
  },
  centeredView: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "#c7d4ff",
    height: 500,
    width: 300,
    margin: 30,
  },
});
