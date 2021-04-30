import AppLoading from 'expo-app-loading'
import React from 'react';
import Home from './src/views/Home'

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

export default function App() {
  
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded) 
    return <AppLoading />
  
  return (
    <Home />
  );
}


