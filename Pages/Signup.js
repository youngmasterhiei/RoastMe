import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

import { useForm } from "react-hook-form";

const Signup = () => {
  const onSubmit = (data) => {
    console.log(data);
    alert(data.Username + " " + data.Password);
  };

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("Username");
    register("Password");
    register("ConfirmPassword");
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Username</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          setValue("Username", text);
        }}
      />
      <Text style={styles.text}>Password</Text>

      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={(text) => {
          setValue("Password", text);
        }}
      />
      <Text style={styles.text}>Confirm Password</Text>

      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={(text) => {
          setValue("ConfirmPassword", text);
        }}
      />

      <View style={styles.button}>
        <Button
          title="submit"
          style={styles.buttonText}
          onPress={handleSubmit(onSubmit)}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
  },
  text: {
    textDecorationLine: "underline",
  },
  textInput: {
    backgroundColor: "blue",
    paddingTop: 10,
    margin: 10,
  },
});

export default Signup;
