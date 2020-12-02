import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";

const screens = {
  Home: {
    screen: Home,
  },
  Signup: {
    screen: Signup,
  },
};

const Nav = createStackNavigator(screens);

export default createAppContainer(Nav);
