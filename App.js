import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Screens/Splash';
import Login from './Screens/Login';
export default class App extends Component {

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} hidden={true} />
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash}
            options={{
              headerLeft: null,
              title: '',
              headerTitleStyle: {
                color: "#fff"
              },
              headerStyle: {
                height: 0
              }
            }}
          />
          <Stack.Screen name="Login" component={Login}
            options={{
              title: '',
              headerTitleStyle: {
                color: "#fff",
              },
              headerStyle: {
                height: 0,
                backgroundColor: '#479fe2',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}