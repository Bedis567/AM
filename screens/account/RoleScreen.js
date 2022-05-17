import { StyleSheet, Text, View , Button , TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../../config/colors'


const RoleScreen = (props) => {
  return (
    <View style={styles.back} >

    <View style={{marginVertical:30 , alignItems:'center'}}>
      <Text style={styles.text}>Aide-Mémoire</Text>
      </View>
    
      <View style={{marginVertical:100, alignItems:'center'}}>
      <View style={{alignItems:'center'}}>
     <TouchableOpacity style={{ width:350, height:75, backgroundColor:colors.purplelight, borderRadius:15,  alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}} onPress = {() => props.navigation.navigate('Register_malade')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}} onPress = {() => props.navigation.navigate('Register_proche')}>Je suis un Malade</Text>
     </TouchableOpacity>
     </View>
     <View style={{ alignItems:'center'}}>
     <TouchableOpacity style={{top:25 ,width:350, height:75, backgroundColor:colors.pastelGreen, borderRadius:15,  alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}} onPress = {() => props.navigation.navigate('Register_proche')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}} onPress = {() => props.navigation.navigate('Register_proche')}>Je suis un Proche</Text>
     </TouchableOpacity>
     </View>
     
     <View style={{ alignItems:'center'}}>
     <TouchableOpacity style={{top:25 ,width:350, height:75, backgroundColor:colors.blueLight, borderRadius:15, marginTop:30, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}} onPress = {() => props.navigation.navigate('Register_proche')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}} onPress = {() => props.navigation.navigate('Register_proche')}>Je suis un Médecin</Text>
     </TouchableOpacity>
     </View></View></View>
  )}

 

const styles = StyleSheet.create({
  


  text: {
    fontSize: 52,
    
    fontWeight: 'bold',
    letterSpacing: 0.25,
    fontFamily:'lobster',
    color: colors.purple ,
    alignItems : 'center' ,
      justifyContent: 'flex-start',
     
    
  },
  back:{
    backgroundColor: colors.primary ,
    height:'100%',
    width:'100%' ,
  }
});
export default RoleScreen