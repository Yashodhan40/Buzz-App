import * as React from 'react';
import {Text,View} from 'react-native';
import {createAppContainer}  from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import faceScreen from './screens/fb';
import instaScreen from './screens/insta'

export default class App extends React.Component{
  render(){
  return (
      <AppContainer/>
  )
  }
}
const tabNavigator = createBottomTabNavigator({
    faceB:{screen:faceScreen},
    insta:{screen:instaScreen}
}) 

const AppContainer = createAppContainer(tabNavigator);

