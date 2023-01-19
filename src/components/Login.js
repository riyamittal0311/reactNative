import { useState } from "react";
import { StyleSheet, Image, View, TextInput, Button, Text } from "react-native";
import Constants from "expo-constants";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 200 }}>
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 100 }}
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__480.jpg",
          }}
        />
      </View>
      <View style={{ display: "flex", alignSelf: "center" }}>
        <Text style={styles.login}> Login</Text>
        <Text style={styles.paragraph}>
          Please Enter the Below details to continue
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Name"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Password"
        />
      </View>
      <View style={styles.forgetPass}>
        <Text style={{ color: "purple" }}>Sign Up</Text>
        <Text style={{ color: "purple" }}> Forget Password?</Text>
      </View>
      <View style={styles.button}>
        <Button
          color="purple"
          onPress={() => {
            navigation.navigate("Dashboard", { name: email });
          }}
          title="SUBMIT"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    margin: 30,
    width: "30%",
    display: "flex",
    alignSelf: "center",
  },
  login: {
    display: "flex",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    color: "purple",
  },
  paragraph: {
    fontSize: 20,
    color: "purple",
  },
  forgetPass: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
  },
});

export default Login;
