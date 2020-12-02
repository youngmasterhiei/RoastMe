import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../Components/Header";
// import Signup from "./Pages/Signup";
import AboutMe from "../Components/AboutMe";
// import Navigator from "./Routes/homeStack";
const Home = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {/* <Signup /> */}
      <AboutMe />
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

export default Home;
