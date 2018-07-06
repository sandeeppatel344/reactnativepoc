import React from "react";
import {createStackNavigator} from "react-navigation"
import {LoginLayout} from "../component/login/layout/login-layout"


const RouterConfig = createStackNavigator({
  Login: { screen: LoginLayout }
});