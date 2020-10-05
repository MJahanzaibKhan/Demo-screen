// In App.js in a new project

import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import DemoScreen from './src/components/DemoScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#032a4f' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
            options={{
              title: 'Home Screen',
              headerStyle: {
                backgroundColor: '#032a4f',
                height: 70
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen name="Checkout" component={DemoScreen}
            options={{
              title: 'Checkout',
              headerStyle: {
                backgroundColor: '#032a4f',
                height: 70
              },
              headerTintColor: '#fff'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;