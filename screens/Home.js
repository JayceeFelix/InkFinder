import "react-native-gesture-handler";
import * as React from "react";
import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Text, Image, StyleSheet, View, ScrollView } from "react-native";
//import Search from "./Search"
import FeedGallery from "../screens/FeedGallery";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";

const Feed = createStackNavigator();

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.buttonView}>
        <Pressable title="Buscar" style={styles.button} >
          <Text style={styles.buttonText}> Feed </Text>
        </Pressable>
        <Pressable title="Buscar" style={styles.button} onPress={() => navigation.navigate("Search") }>
          <Text style={styles.buttonText}> Buscar </Text>
        </Pressable>
        </View>       
        <FeedGallery></FeedGallery>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  }
});
