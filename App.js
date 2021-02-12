import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import Router from './pages/router';


export default function App() {
  return (
    <Router />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
