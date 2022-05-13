import { StyleSheet, Text, View , Button , TouchableOpacity , Image,ScrollView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

import Input from '../../components/input'

const RoleScreen = (props) => {
  return (
    
    

    <View style={{height:'100%', width:'100%',flexDirection:'column', flex:1}}>
    <View style={{width: "100%",
      marginTop:30,
      height: "40%",
       alignItems: "center",
       backgroundColor: colors.primary,
       borderBottomColor:'black', borderBottomWidth:0.7}}>
         
     <Image style={{width:"45%",height:"50%", top:30 }} 
     source={require('../../assets/logo.png')} />
      <Text style={{fontFamily:"Lobster", margin:5, fontSize:30, top:40 , color:colors.purple}}>Aide-Mémoire</Text>
     <Text style={{fontFamily:"Lobster", margin:5, fontSize:15, top:40}}>Vos biens aimés, en pleine sécurité </Text>
    
         </View>
         <View style={{justifyContent:'flex-start', alignItems:'center', width:'100%', height:'60%',  backgroundColor:colors.primary}}>
        
             <Text style={{fontFamily:'Montserrat-Bold', fontSize:15, color:'black' , marginTop:30}}>Veuillez indiquer vote profil</Text>
    
     
      <View style={{alignItems:'center', marginTop:50}}>
     <TouchableOpacity style={{ width:300, height:50, backgroundColor:'#A3A31C', borderRadius:15,  alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}}
      onPress = {() => props.navigation.navigate('Register_malade')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}} >Je suis un Malade</Text>
     </TouchableOpacity>
     </View>
     <View style={{ alignItems:'center'}}>
     <TouchableOpacity style={{top:25 ,width:300, height:50, backgroundColor:'#EECD12', borderRadius:15,  alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}}
      onPress = {() => props.navigation.navigate('Register_proche')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}}
      >Je suis un Proche</Text>
     
     </TouchableOpacity>
     </View>
     
     <View style={{ alignItems:'center'}}>
     <TouchableOpacity style={{top:25 ,width:300, height:50, backgroundColor:'#F9AF19', borderRadius:15, marginTop:30, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}}
      onPress = {() => props.navigation.navigate('Register_proche')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}}>Je suis un Médecin</Text>
     </TouchableOpacity>
     </View></View></View>
  )}

 

const styles = StyleSheet.create({
  


  text: {
    fontSize: 52,
    
   
    letterSpacing: 0.25,
    fontFamily:'Lobster',
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