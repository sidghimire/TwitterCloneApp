import { View, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import WelcomeScreenNavigator from './navigator/WelcomeScreenNavigator'
import "./firebase";
import {getAuth} from 'firebase/auth'
const App = () => {
  return (
    <WelcomeScreenNavigator/>
  )
}

export default App;