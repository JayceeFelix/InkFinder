import 'react-native-gesture-handler';
import "react-native-vector-icons";
import * as React from 'react';
import { Text, Image,TextInput, StyleSheet,View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {Icon} from "react-native-vector-icons";



export default function Search({navigation}){
    return(
    <View style={styles.container}>
        <Text style={{fontSize: 30}}> Buscar </Text>
        <View style={styles.caixaDeBusca}>
            <TextInput style={styles.textinput}></TextInput>
            <TouchableOpacity onPress={() => (console.log("Click"))}>
                <Image 
                    source={require("../assets/filter.png")}
                    style={styles.icon}>
                </Image>
            </TouchableOpacity>
        </View>        
    </View>
);
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    caixaDeBusca:{
        flex: 2,
        flexDirection: "row",
        marginTop: 15   
    },
    textinput: {
        borderColor: "#000",
        borderWidth: 0.5,
        padding: 3,
        minWidth: 100,
        height: 30

    },
    icon:{
        width: 28,
        height: 28,
        marginLeft: 10,
        alignSelf: "flex-end"
    }
  })