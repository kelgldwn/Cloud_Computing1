import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPasswordBOSS] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      Alert.alert("Error", "Please enter username and password");
      return;
    }

    // simple demo login check
    if (username === "admin" && password === "1234") {
      Alert.alert("Success", "Login successful");
    } else {
      Alert.alert("Error", "Invalid credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
