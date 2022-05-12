import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Route from './Route'
import RoleScreen from "../screens/account/RoleScreen"
import RegisterScreen from '../screens/account/RegisterScreen'
import WelcomeScreen from '../screens/account/WelcomeScreen'
import LoginScreen2 from '../screens/account/LoginScreen2'
import ConnectionAccount from '../screens/account/ConnectionAccount'
import CodeMalade from '../screens/account/CodeMalade'
import DeclareProblem from '../screens/Problem/DeclareProblem'

import Register_proche from '../screens/account/Register_proche'
import HomeScreenProche from '../screens/account/HomeScreenProche'
import HomeScreenMalade from '../screens/account/HomeScreenMalade'
import UrgenceScreen1 from '../screens/Urgence/UrgenceScreen1'
import UrgenceScreen2 from '../screens/Urgence/UrgenceScreen2'
import UrgenceScreen3 from '../screens/Urgence/UrgenceScreen3'
import UrgenceScreen4 from '../screens/Urgence/UrgenceScreen4'
import Scan_code from '../screens/account/Scan_code'
import ChoixPilulier from '../screens/pilulier/ChoixPilulier'
import ConfigPilulier2 from '../screens/pilulier/ConfigPilulier2'
import AlimenterConfigurerPilulier from '../screens/pilulier/AlimenterConfigurerPilulier'
import ConfigRappelsUtiles from '../screens/Rappels/ConfigRappelsUtiles'
import Test from '../Test'
const Stack = createStackNavigator();

const GuestStack = () => {
  return (
    <Stack.Navigator  initialRouteName={Route.RAPPELS1} >
     
      <Stack.Screen name={Route.REGISTER_MALADE} component={RegisterScreen} />
      <Stack.Screen name={Route.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={Route.ROLE} component={RoleScreen} />
      <Stack.Screen name={Route.LOGIN2} component={LoginScreen2} />
      <Stack.Screen name={Route.CONNECTION} component={ConnectionAccount} />
      <Stack.Screen name={Route.CODE} component={CodeMalade} />
      <Stack.Screen name={Route.SCAN} component={Scan_code} />
      <Stack.Screen name={Route.PROBLEM} component={DeclareProblem} />
      <Stack.Screen name={Route.REGISTER_PROCHE} component={Register_proche} />
    
      <Stack.Screen name={Route.HOME_PROCHE} component={HomeScreenProche} />
      <Stack.Screen name={Route.HOME_MALADE} component={HomeScreenMalade} />
      <Stack.Screen name={Route.URGENCE1} component={UrgenceScreen1} />
      <Stack.Screen name={Route.URGENCE2} component={UrgenceScreen2} />
      <Stack.Screen name={Route.URGENCE3} component={UrgenceScreen3} />
      <Stack.Screen name={Route.URGENCE4} component={UrgenceScreen4} />
      <Stack.Screen name={Route.PILULIER1} component={ChoixPilulier} />
      <Stack.Screen name={Route.PILULIER4} component={ConfigPilulier2} />
      <Stack.Screen name={Route.PILULIER3} component={AlimenterConfigurerPilulier} />
      <Stack.Screen name={Route.RAPPELS1} component={ConfigRappelsUtiles} />
      <Stack.Screen name={Route.TEST} component={Test} />
    </Stack.Navigator>
  )
}

export default GuestStack