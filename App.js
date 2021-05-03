import AppLoading from 'expo-app-loading'
import React from 'react';
import Home from './src/views/Home'
import Details from './src/views/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_900Black,
} from '@expo-google-fonts/jost'

const Stack = createStackNavigator();

export default function App() {
  
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_900Black
  });

  if(!fontsLoaded) 
    return <AppLoading />
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


