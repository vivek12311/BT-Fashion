import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Frontend/Login';
import Signup from './Frontend/Signup';
import Welcome from './Frontend/Welcome';
import Outfitgenerator from './Frontend/Outfitgenerator';
import Userpage from './Frontend/Userpage';
import Shoppingcart from './Frontend/Shoppingcart';
import Browse from './Frontend/Browse';
import Generated from './Frontend/Generated';
import Generated2 from './Frontend/Generated2';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="ReFit"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ReFit" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="Outfitgenerator"
          component={Outfitgenerator}
          options={{
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                opacity: current.progress,
              },
            }),
          }}
        />
        
        <Stack.Screen
          name="Userpage"
          component={Userpage}
          options={{
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                opacity: current.progress,
              },
            }),
          }}
        />
        
        <Stack.Screen
          name="Shoppingcart"
          component={Shoppingcart}
          options={{
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                opacity: current.progress,
              },
            }),
          }}
        />
        
        <Stack.Screen
          name="Browse"
          component={Browse}
          options={{
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                opacity: current.progress,
              },
            }),
          }}
        />
        <Stack.Screen
                  name="Generated"
                  component={Generated}
                  options={{
                    transitionSpec: {
                      open: { animation: 'timing', config: { duration: 0 } }, // Set duration to 0 for immediate transition
                      close: { animation: 'timing', config: { duration: 0 } },
                    },
                  }}
                />   
          <Stack.Screen
                  name="Generated2"
                  component={Generated2}
                  options={{
                    transitionSpec: {
                      open: { animation: 'timing', config: { duration: 0 } }, // Set duration to 0 for immediate transition
                      close: { animation: 'timing', config: { duration: 0 } },
                    },
                  }}
                />        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
