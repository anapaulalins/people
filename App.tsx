import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="dark" backgroundColor="rgba(0,0,0,0)" translucent />
        <Routes/>
    </NavigationContainer>
  );
}


