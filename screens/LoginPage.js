import { Text, TextInput, Image, Pressable, View, StyleSheet } from "react-native";
import { useState } from "react";

function LogIn({userInput, passwordInput, navigation}){
    
    console.log(userInput);
    console.log(passwordInput);
    if (userInput == "Cliente" && passwordInput == "clientep"){
        navigation.navigate("Feed");0
    } else {
        return(
            <Text> Wrong! </Text>
        )
    }

}

export default function LoginPage({navigation}) {
    const [userInput, setUserInput] = useState(""); // variable gets information from text box
    const [passwordInput, setPasswordInput] = useState(""); // variable gets information from text box


  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.png")}  style={styles.logoImage}/>
      <TextInput
        style={styles.userinput}
        onChangeText={(t) => setUserInput(t)}
        value={userInput}
      ></TextInput>
      <TextInput
        style={styles.userinput}
        onChangeText={(t) => setPasswordInput(t)}
        value={passwordInput}
        secureTextEntry = {true}
      ></TextInput>
      <Pressable 
          onPress={() => navigation.navigate("Feed")}
        >
          <Text style={styles.forgotPassword}> Esqueceu sua senha? </Text>
        </Pressable>
        <Pressable style={styles.loginButton}
        onPress={() => {LogIn({userInput, passwordInput, navigation})}}>
            <Text style={styles.loginButtonText}> Login </Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logoImage: {
    width: 100,
    height:65,
    marginBottom: 10,
  },
  userinput: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    padding: 3,
    width: 150,
    minHeight: 40,
    margin: 6
  },
  forgotPassword:{
    fontSize: 10,
    alignSelf: "flex-end",
    textDecorationLine: "underline"

  },
  loginButton:{
    backgroundColor: "black",
    margin: 6,
    padding: 4,
    borderRadius: 20,
    width: 150,
    alignItems: "center"

  },
  loginButtonText:{
    color: "white",
    fontSize: 20
  }
});

//onPress={() => navigation.navigate("Feed")}>