import "react-native-gesture-handler";
import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {  Button,Text, StyleSheet, View } from "react-native";
import Search from "./Search"

export default function Home({navigation}) {
  return (
      <View style={styles.container}>
        <Text>HELLO mundo</Text>
        <Button 
          title="Buscar" 
          onPress={() => navigation.navigate("Search")}
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
