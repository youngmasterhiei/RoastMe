import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { API } from "../Routes/api";

import { useForm } from "react-hook-form";

const Signup = () => {
  const onSubmit = (data) => {
    console.log(data);
    console.log("in signup data");
    API.signup({
      data,
      successfulCb: (res) =>
        (username = res.data.username + " " + res.data.password),
    });
  };

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("username");
    register("password");
    register("ConfirmPassword");
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Username</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          setValue("username", text);
        }}
      />
      <Text style={styles.text}>Password</Text>

      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={(text) => {
          setValue("password", text);
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
