import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Frontend/Login';
import Signup from './Frontend/Signup';
import Welcome from './Frontend/Welcome';
import Homepage from './Frontend/Homepage'; // Import the Homepage component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ReFit" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Homepage" component={Homepage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
