import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home.js";
import Search from "./screens/Search.js";
import FeedGallery from "./screens/FeedGallery.js";

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>  
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="FeedGallery" component={FeedGallery}/>
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}
