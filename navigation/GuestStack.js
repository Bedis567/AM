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
import RappelsUtiles from '../screens/Rappels/RappelsUtiles'
import Test from '../Test'
import NotificationsOublie from '../screens/Notifications/NotificationsOublie'
import NotificationsDone from '../screens/Notifications/NotificationsDone'
import NotificationsPending from '../screens/Notifications/NotificationsPending'
import RappelsEtPilulierDone from '../screens/Rappels/RappelsEtPilulierDone'
import RappelsEtPilulierOublie from '../screens/Rappels/RappelsEtPilulierOublie'
import RappelsEtPilulierPending from '../screens/Rappels/RappelsEtPilulierPending'
import LoginScreenMalade from '../screens/account/LoginScreenMalade'

import LoginScreenProche from '../screens/account/LoginScreenProche'
import Localisation from '../screens/Localiser/Localisation'

const Stack = createStackNavigator();

const GuestStack = () => {
  return (


    <Stack.Navigator  initialRouteName={Route.WELCOME} >


     
      <Stack.Screen name={Route.REGISTER_MALADE} component={RegisterScreen} options={{headerShown:false}}/>
      <Stack.Screen name={Route.WELCOME} component={WelcomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name={Route.ROLE} component={RoleScreen} options={{headerShown:false}}/>
      <Stack.Screen name={Route.LOGIN2} component={LoginScreen2} options={{headerShown:false}}/>
      <Stack.Screen name={Route.CONNECTION} component={ConnectionAccount} options={{headerShown:false}}/>
      <Stack.Screen name={Route.CODE} component={CodeMalade} options={{headerShown:false}}/>
      <Stack.Screen name={Route.SCAN} component={Scan_code} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PROBLEM} component={DeclareProblem} options={{headerShown:false}}/>
      <Stack.Screen name={Route.REGISTER_PROCHE} component={Register_proche} options={{headerShown:false}}/>
      <Stack.Screen name={Route.HOME_PROCHE} component={HomeScreenProche} options={{headerShown:false}}/>
      <Stack.Screen name={Route.HOME_MALADE} component={HomeScreenMalade} options={{headerShown:false}}/>
      <Stack.Screen name={Route.URGENCE1} component={UrgenceScreen1} options={{headerShown:false}}/>
      <Stack.Screen name={Route.URGENCE2} component={UrgenceScreen2} options={{headerShown:false}}/>
      <Stack.Screen name={Route.URGENCE3} component={UrgenceScreen3} options={{headerShown:false}}/>
      <Stack.Screen name={Route.URGENCE4} component={UrgenceScreen4} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PILULIER1} component={ChoixPilulier} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PILULIER4} component={ConfigPilulier2} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PILULIER3} component={AlimenterConfigurerPilulier} options={{headerShown:false}} />
      <Stack.Screen name={Route.RAPPELS1} component={ConfigRappelsUtiles} options={{headerShown:false}}/>
      <Stack.Screen name={Route.RAPPELS3} component={RappelsUtiles} options={{headerShown:false}}/>
      <Stack.Screen name={Route.TEST} component={Test} options={{headerShown:false}}/>
      <Stack.Screen name={Route.NOTIFOUBLIE} component={NotificationsOublie} options={{headerShown:false}}/>
      <Stack.Screen name={Route.NOTIFDONE} component={NotificationsDone} options={{headerShown:false}}/>
      <Stack.Screen name={Route.NOTIFPENDING} component={NotificationsPending} options={{headerShown:false}}/>
      <Stack.Screen name={Route.RAPPELSPILULIERDONE} component={RappelsEtPilulierDone} options={{headerShown:false}}/>
      <Stack.Screen name={Route.RAPPELSPILULIEROUBLIE} component={RappelsEtPilulierOublie} options={{headerShown:false}}/>
      <Stack.Screen name={Route.RAPPELSPILULIERPENDING} component={RappelsEtPilulierPending} options={{headerShown:false}}/>
      <Stack.Screen name={Route.LOGIN_MALADE} component={LoginScreenMalade} options={{headerShown:false}}/>

      <Stack.Screen name={Route.LOGIN_PROCHE} component={LoginScreenProche} options={{headerShown:false}}/>
      <Stack.Screen name={Route.LOCALISER} component={Localisation} options={{headerShown:false}}/>

    </Stack.Navigator>
  )
}

export default GuestStack