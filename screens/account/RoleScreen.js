<<<<<<< HEAD
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
=======
import { StyleSheet, Text, View , Button , TouchableOpacity , Image,ScrollView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { adaptToHeight, adaptToWidth } from '../../config/Demensions'
import Input from '../../components/input'

const RoleScreen = (props) => {
  return (
    
    

    <View style={{flexDirection:'column', flex:1}}>
    <View style={{flex:0.4,
       alignItems: "center",
       backgroundColor: colors.primary,
       borderBottomColor:'black', borderBottomWidth:0.7}}>
         
     <Image style={{width:adaptToWidth(0.5),height:adaptToHeight(0.23), top:30  , resizeMode:'stretch'}} 
     source={require('../../assets/logo.png')} />
      <Text style={{fontFamily:"Lobster", margin:5, fontSize:30, top:40 , color:colors.purple}}>Aide-Mémoire</Text>
     <Text style={{fontFamily:"Lobster", margin:5, fontSize:15, top:40}}>Vos biens aimés, en pleine sécurité </Text>
    
         </View>
         <View style={{justifyContent:'flex-start', alignItems:'center',flex:0.6,  backgroundColor:colors.primary}}>
        
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
     
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
     </TouchableOpacity>
     </View>
     
     <View style={{ alignItems:'center'}}>
<<<<<<< HEAD
     <TouchableOpacity style={{top:25 ,width:350, height:75, backgroundColor:colors.blueLight, borderRadius:15, marginTop:30, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}} onPress = {() => props.navigation.navigate('Register_proche')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}} onPress = {() => props.navigation.navigate('Register_proche')}>Je suis un Médecin</Text>
=======
     <TouchableOpacity style={{top:25 ,width:300, height:50, backgroundColor:'#F9AF19', borderRadius:15, marginTop:30, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}}
      onPress = {() => props.navigation.navigate('Register_proche')}>
     <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.black}}>Je suis un Médecin</Text>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
     </TouchableOpacity>
     </View></View></View>
  )}

 

const styles = StyleSheet.create({
  


  text: {
    fontSize: 52,
    
<<<<<<< HEAD
    fontWeight: 'bold',
    letterSpacing: 0.25,
    fontFamily:'lobster',
=======
   
    letterSpacing: 0.25,
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
  }
});
export default RoleScreen