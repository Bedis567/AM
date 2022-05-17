import { StyleSheet, Text, View ,TouchableOpacity , Linking } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
const DeclareProblem = ({navigation}) => {
  return (
    <View style={styles.back} >

    <View style={{marginVertical:30 , alignItems:'center'}}>
      <Text style={styles.text}>Déclaration de problème</Text>
      </View>
    
      <View style={{marginVertical:50 , alignItems:'center' }}>
      <View style={{marginVertical:12 , alignItems:'center'}}>
      <TouchableOpacity style={styles.button1}>
     <Text onPress={()=>{Linking.openURL('tel:71 589 461');}} style={{  fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>SAMU</Text>
     </TouchableOpacity>
     </View>
     <View style={{marginVertical:12 , alignItems:'center'}}>
      <TouchableOpacity style={styles.button2}>
     <Text onPress={()=>{Linking.openURL('tel:197');}} style={{fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>Protection Civile</Text>
     </TouchableOpacity>
     </View>
     <View style={{marginVertical:12 , alignItems:'center'}}>
      <TouchableOpacity style={styles.button3}>
     <Text onPress={()=>{Linking.openURL('tel:29579539');}} style={{fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>Appeler Contact 1</Text>
     </TouchableOpacity>
     </View>
     <View style={{marginVertical:12 , alignItems:'center'}}>
      <TouchableOpacity style={styles.button3}>
     <Text onPress={()=>{Linking.openURL('tel:58961144');}} style={{fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>Appeler Contact 2</Text>
     </TouchableOpacity>
     </View>
     <View style={{marginVertical:12 , alignItems:'center'}}>
      <TouchableOpacity style={styles.button3}>
     <Text onPress={()=>{Linking.openURL('tel:29579539');}} style={{fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>Appeler service client</Text>
     </TouchableOpacity>
     </View>
     <View style={{marginVertical:12 , alignItems:'center'}}>
      <TouchableOpacity style={styles.button3}>
     <Text onPress={()=>{Linking.openURL('tel:58961144');}} style={{fontSize: 20,fontFamily:'Montserrat',fontWeight: 'bold'}}>Appeler service technique</Text>
     </TouchableOpacity>
     </View></View></View>
  )
}



const styles = StyleSheet.create({ button1: {
  elevation: 8,
  backgroundColor: colors.pastelGreen,
  borderRadius: 30,
  paddingVertical: 12,
  paddingHorizontal: 12 ,
  flexDirection:'row',
  fontFamily:'Montserrat',
  fontWeight: 'bold',
  flexDirection:'row',
  width:200,
  height:50,
  alignItems:'center',
  justifyContent:'center'
},
button2: {
  elevation: 8,
  backgroundColor: colors.pastelGreen,
  borderRadius: 30,
  paddingVertical: 12,
  paddingHorizontal: 12 ,
  flexDirection:'row',
  fontFamily:'Montserrat',
  fontWeight: 'bold',
  width:300,
  height:50,
  alignItems:'center',
  justifyContent:'center',
  color:'white'
},
button3: {
  elevation: 8,
 borderRadius: 30,
 paddingVertical: 12,
 paddingHorizontal: 12 ,
 flexDirection:'row',
 fontFamily:'Montserrat',
 fontWeight: 'bold',
 backgroundColor:colors.white,
 width:350,
 height:50,
 alignItems:'center',
 justifyContent:'center'} ,


text: {
  fontSize: 40,
  
  fontWeight: 'bold',
  letterSpacing: 0.25,
<<<<<<< HEAD
  fontFamily:'lobster',
=======
  fontFamily:'Lobster',
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
  color: colors.purple ,
  alignItems : 'center' ,
    justifyContent: 'flex-start',
   
  
},
back:{
  backgroundColor: colors.primary ,
  height:'100%',
  width:'100%' ,
}})
export default DeclareProblem