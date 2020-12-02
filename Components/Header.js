import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Header = ({ navigation }) => {
  const pressHandler = (value) => {
    navigation.navigate(value);
  };
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Roast Me</Text>
      <View style={styles.link}>
        <Button
          title="Sign Up"
          style={styles.linkText}
          onPress={() => pressHandler("Signup")}
        />
        <Text style={styles.linkText}> | </Text>
        <Button
          title="Login"
          style={styles.linkText}
          onPress={() => pressHandler("Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 73,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "darkslateblue",
  },
  headerText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  link: {
    flexDirection: "row",
  },
  linkText: {
    flex: 1,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default Header;
