<<<<<<< HEAD
import { StyleSheet, Text, View , Button} from 'react-native'
=======
import { StyleSheet, Text, View , Button,SafeAreaView} from 'react-native'
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
import React from 'react'
import colors from '../../config/colors'
import AppButton from '../../components/AppButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from "@expo/vector-icons/Ionicons"
<<<<<<< HEAD



const LoginScreen2 = () => {
  return (
  <View style={styles.back} >

<View style={{marginVertical:30 , alignItems:'center'}}>
  <Text style={styles.text}>Aide-Mémoire</Text>
  </View>

  <View style={{marginVertical:40 , alignItems:'center'}}>
  <Text style={styles.text2}>Créer votre profil</Text>
  </View>
  <View style={{marginVertical:12 , alignItems:'center'}}>
 
 <TouchableOpacity style={styles.button1}><Ionicons name={"logo-google"}  style={{color:'#B22222'}} size={20}/>
=======
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'



const LoginScreen2 = (props) => {
  return (
  <SafeAreaView style={styles.back} >

<View style={{marginVertical:adaptToHeight(0.06) , alignItems:'center', justifyContent:'center', flex:0.2}}>
  <Text style={styles.text}>Aide-Mémoire</Text>
  </View>

  <View style={{marginVertical:adaptToHeight(0.04) , alignItems:'center'}}>
  <Text style={styles.text2}>Créer votre profil</Text>
  </View>
  <View style={{marginVertical:adaptToHeight(0.015) , alignItems:'center'}}>
 
 <TouchableOpacity style={styles.button1}><Ionicons name={"logo-google"}  style={{color:'#B22222'}} size={adaptToWidth(0.06)}/>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
 <Text style={{fontFamily:'Montserrat',fontWeight: 'bold'}}> S'INSCRIRE AVEC GOOGLE</Text>
 </TouchableOpacity>
 </View>

<<<<<<< HEAD
  <View style={{marginVertical:12 , alignItems:'center'}}>
 
  <TouchableOpacity style={styles.button2}><Ionicons name={"logo-facebook"}   style={{color:colors.white}} size={20}/>
=======
  <View style={{marginVertical:adaptToHeight(0.015) , alignItems:'center'}}>
 
  <TouchableOpacity style={styles.button2}><Ionicons name={"logo-facebook"}   style={{color:colors.white}} size={adaptToWidth(0.06)}/>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
  <Text style={{fontFamily:'Montserrat',fontWeight: 'bold', color:colors.white}}> S'INSCRIRE AVEC FACEBOOK</Text>
  </TouchableOpacity>
  </View>
  
<<<<<<< HEAD
  <View style={{marginVertical:12, alignItems:'center'}}>
 
 <TouchableOpacity style={styles.button3}><Ionicons name={"mail-outline"}  size={22}/>
=======
  <View style={{marginVertical:adaptToHeight(0.015), alignItems:'center'}}>
 
 <TouchableOpacity style={styles.button3}><Ionicons name={"mail-outline"}  size={adaptToWidth(0.065)}/>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
 <Text style={{fontFamily:'Montserrat',fontWeight: 'bold' }}> S'INSCRIRE AVEC EMAIL</Text>
 </TouchableOpacity>
 </View>
  <View>
<<<<<<< HEAD
    <TouchableOpacity style={{flexDirection:'row' , alignItems: 'center',justifyContent:'center',marginVertical:12}}>
  <Text style={styles.text4}>Vous avez déjà un compte?</Text>
  <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={styles.text5}><Text style={styles.text5}>Se connecter</Text>
  </TouchableOpacity></TouchableOpacity>
   </View>
  </View> 
=======
    <TouchableOpacity style={{flexDirection:'row' , alignItems: 'center',justifyContent:'center',marginVertical:adaptToHeight(0.015)}}>
  <Text style={styles.text4}>Vous avez déjà un compte?</Text>
  <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={styles.text5}>
    <Text style={styles.text5}>Se connecter</Text>
  </TouchableOpacity></TouchableOpacity>
   </View>
  </SafeAreaView> 
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
  )}


 

const styles = StyleSheet.create({
  button1: {
    elevation: 8,
    backgroundColor: colors.white,
    borderRadius: 30,
<<<<<<< HEAD
    paddingVertical: 12,
    paddingHorizontal: 12 ,
=======
    paddingVertical: adaptToHeight(0.01),
    paddingHorizontal: adaptToWidth(0.04) ,
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
    flexDirection:'row',
    fontFamily:'Montserrat',
    fontWeight: 'bold',
    flexDirection:'row',
<<<<<<< HEAD
    width:350,
    height:50,
=======
    width:adaptToWidth(0.9),
    height:adaptToHeight(0.065),
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
    alignItems:'center',
    justifyContent:'center'
  },
  button2: {
    elevation: 8,
    backgroundColor: '#1778F2',
    borderRadius: 30,
<<<<<<< HEAD
    paddingVertical: 12,
    paddingHorizontal: 12 ,
    flexDirection:'row',
    fontFamily:'Montserrat',
    fontWeight: 'bold',width:350,
    height:50,
=======
    paddingVertical: adaptToHeight(0.01),
    paddingHorizontal: adaptToWidth(0.04) ,
    flexDirection:'row',
    fontFamily:'Montserrat',
    fontWeight: 'bold',
    width:adaptToWidth(0.9),
    height:adaptToHeight(0.065),
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
    alignItems:'center',
    justifyContent:'center',
    color:'white'
  },
  button3: {
     elevation: 8,
    borderRadius: 30,
<<<<<<< HEAD
    paddingVertical: 12,
    paddingHorizontal: 12 ,
    flexDirection:'row',
    fontFamily:'Montserrat',
    fontWeight: 'bold',
    backgroundColor:colors.white,width:350,
    height:50,
=======
    paddingVertical: adaptToHeight(0.01),
    paddingHorizontal: adaptToWidth(0.04) ,
    flexDirection:'row',
    fontFamily:'Montserrat',
    fontWeight: 'bold',
    backgroundColor:colors.white,
    width:adaptToWidth(0.9),
    height:adaptToHeight(0.065),
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
    alignItems:'center',
    justifyContent:'center'
  },
  text2: {
    fontSize: 40,
    letterSpacing: 0.25,
<<<<<<< HEAD
    fontFamily:'Montserrat',
    color: colors.black ,
    alignItems : 'center' ,
    justifyContent: 'flex-start'
 } ,
 text: {
  fontSize: 40,
  
  fontWeight: 'bold',
  letterSpacing: 0.25,
  fontFamily:'lobster',
  color: colors.purple ,
  alignItems : 'center' ,
    justifyContent: 'flex-start',
   
  
=======
    fontFamily:'Montserrat-Bold',
    color: colors.black ,
    
 } ,
 text: {
  fontSize: 48,
  letterSpacing: adaptToWidth(0.005),
  fontFamily:'Lobster',
  color: colors.purple 
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
},
 text3: {
    
    fontWeight: 'bold',
    color:'red',
<<<<<<< HEAD
    alignItems : 'center' ,
    justifyContent: 'flex-start',
=======
    
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
 } ,
 text4: {
    
    fontWeight: 'bold',
    color: colors.black ,

    
 } ,
 text5: {
    
    fontWeight: 'bold',
    color: '#B22222' ,
  
    
 } ,
  back:{
    backgroundColor: colors.primary,
<<<<<<< HEAD
    height:'100%',
    width:'100%' ,
=======
   flex:1
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e

  },
  
});
export default LoginScreen2