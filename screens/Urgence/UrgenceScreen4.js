import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import Ionicons from "@expo/vector-icons/Ionicons"

const UrgenceScreen4 = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center'}}>
          <Text style={{fontFamily:'Montserrat',fontSize:47, top:70,textAlign:'center',flex:0.27}}>
          Notification envoyée à vos proches  </Text>
          <Text style={{fontFamily:'Montserrat',fontSize:47, top:70,textAlign:'center',flex:0.3}}> 
          Prière de rester calme</Text>
          <Ionicons name={"warning-outline"} style={{ color: 'red',flex:.4 }} size={200} /> 
        </View>
      
      
    </SafeAreaView>
  )
}

export default UrgenceScreen4

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.yellow,
        flex:1
    }
})