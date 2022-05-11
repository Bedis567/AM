import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const UrgenceScreen1 = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View><Text style={{fontFamily:'Montserrat',fontSize:40, top:70,textAlign:'center',flex:0.4}}>S'agit-il d'une urgence?</Text></View>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <TouchableOpacity style={styles.TouchableOpacity1}><Text style={styles.text}  onPress = {() => props.navigation.navigate('Home_malade')}>NON</Text></TouchableOpacity>

          <TouchableOpacity style={styles.TouchableOpacity2}><Text style={styles.text}  onPress = {() => props.navigation.navigate('Urgence2')}>OUI</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default UrgenceScreen1

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.primary,
        flex:1
    },
    TouchableOpacity1:{
        width:150,
        height:150,backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center' , 
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 12 ,
        margin:10
    },
    TouchableOpacity2:{
        width:150,
        height:150,backgroundColor:colors.yesGreen,
        justifyContent:'center',
        alignItems:'center' ,
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 12 ,
        margin:10
    },
    text:{
        fontFamily:'Montserrat',
        fontSize:50,
        color:colors.white
    }
})