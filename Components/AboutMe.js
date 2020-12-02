import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutMe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to Roast Me! Roast Me is a safe place where you can verbally
        abuse one another without fear of being labeled an asshole. Enjoy the
        endless trolling and mocking. Sign up below!
      </Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 15,
    backgroundColor: "gray",
  },
  text: {
    flex: 1,
    flexWrap: "wrap",
    color: "white",
    fontSize: 33,
    textAlign: "center",
  },
});

export default AboutMe;
