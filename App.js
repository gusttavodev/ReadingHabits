import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';

import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider  >
       <Navigation />
        <StatusBar />       
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#E7D2CC"
  },
});