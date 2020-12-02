import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Components/Header";
import Signup from "./Pages/Signup";
import AboutMe from "./Components/AboutMe";
import Nav from "./Routes/Navigation";
import Home from "./Pages/Home";
const App = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Nav />
      {/* <AboutMe /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {},
});

export default App;
