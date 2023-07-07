import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./screens/Home.js";
import Search from "./screens/Search.js";
import FeedGallery from "./screens/FeedGallery.js";
import ProfileClient from "./screens/ProfileClient.js";
import ArtistProfile from "./screens/ArtistProfile.js"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="FeedGallery" component={FeedGallery} />
      <Stack.Screen name="ArtistProfile" component={ArtistProfile} options={{title: " "}} />
    </Stack.Navigator>
  );
}

function MyTab(){
  <Tab.Navigator>
    <Tab.Screen name="Perfil" component={ProfileClient}></Tab.Screen>
  </Tab.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      <MyTab/>
    </NavigationContainer>
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}
