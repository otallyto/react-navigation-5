import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './Routes'

export default function App() {
  return (
   <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
