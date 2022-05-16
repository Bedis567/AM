import { StyleSheet } from 'react-native';
import {useState} from "react"
import {Provider} from "react-redux"
import AppContainer from './AppContainer';
import AuthContext from './context/AuthContext';
import store from './redux/store/store';
import MapView from 'react-native-maps';
import {useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";
import * as Location from 'expo-location';
export default function App() {
const [user,setUser] = useState(null)
let [fontsLoaded] = useFonts({
      'Lobster': require('./assets/fonts/Lobster/Lobster-Regular.ttf'),
      'Montserrat': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto': require('./assets/fonts/Roboto-Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    }
  return (
    <AuthContext.Provider  value={{user, setUser}} >
      <Provider  store={store()} >
  <AppContainer   />
  </Provider>
    </AuthContext.Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})