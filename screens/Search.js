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
      <Text style={{ fontSize: 30 }}> Buscar </Text>
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
  caixaDeBusca: {
    flex: 2,
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
    flex: 3,
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
