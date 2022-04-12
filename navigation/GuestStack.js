import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Route from './Route';
import LoginScreen from '../screens/account/LoginScreen';
import RegisterScreen from '../screens/account/RegisterScreen';
import WelcomeScreen from '../screens/account/WelcomeScreen';

const Stack = createStackNavigator();

const GuestStack = () => {
  return (
    <Stack.Navigator  initialRouteName={WelcomeScreen} >
      <Stack.Screen name={Route.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Route.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={Route.WELCOME} component={WelcomeScreen} />
    </Stack.Navigator>
  )
}

export default GuestStack

const styles = StyleSheet.create({})