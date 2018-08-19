import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
  } from "react-native";
import {createStackNavigator} from 'react-navigation';
import Main from './layout/Main';
import Order from './layout/Order';
import Load from './Load';
import { apps } from "./node_modules/firebase";
const AppStack = createStackNavigator({

  Main:{
    screen:Main
  },Order:{
    screen:Order
  }
  
},{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
  }
});

class App extends Component{
  render(){
    return (
     <AppStack />
    );
  }
}
export default App;

