import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import AppButton from '../../components/AppButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from "@expo/vector-icons/Ionicons"



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
 <Text style={{fontFamily:'Montserrat',fontWeight: 'bold'}}> S'INSCRIRE AVEC GOOGLE</Text>
 </TouchableOpacity>
 </View>

  <View style={{marginVertical:12 , alignItems:'center'}}>
 
  <TouchableOpacity style={styles.button2}><Ionicons name={"logo-facebook"}   style={{color:colors.white}} size={20}/>
  <Text style={{fontFamily:'Montserrat',fontWeight: 'bold', color:colors.white}}> S'INSCRIRE AVEC FACEBOOK</Text>
  </TouchableOpacity>
  </View>
  
  <View style={{marginVertical:12, alignItems:'center'}}>
 
 <TouchableOpacity style={styles.button3}><Ionicons name={"mail-outline"}  size={22}/>
 <Text style={{fontFamily:'Montserrat',fontWeight: 'bold' }}> S'INSCRIRE AVEC EMAIL</Text>
 </TouchableOpacity>
 </View>
  <View>
    <TouchableOpacity style={{flexDirection:'row' , alignItems: 'center',justifyContent:'center',marginVertical:12}}>
  <Text style={styles.text4}>Vous avez déjà un compte?</Text>
  <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={styles.text5}><Text style={styles.text5}>Se connecter</Text>
  </TouchableOpacity></TouchableOpacity>
   </View>
  </View> 
  )}


 

const styles = StyleSheet.create({
  button1: {
    elevation: 8,
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 12 ,
    flexDirection:'row',
    fontFamily:'Montserrat',
    fontWeight: 'bold',
    flexDirection:'row',
    width:350,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },
  button2: {
    elevation: 8,
    backgroundColor: '#1778F2',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 12 ,
    flexDirection:'row',
    fontFamily:'Montserrat',
    fontWeight: 'bold',width:350,
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
    backgroundColor:colors.white,width:350,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },
  text2: {
    fontSize: 40,
    letterSpacing: 0.25,
    fontFamily:'Montserrat',
    color: colors.black ,
    alignItems : 'center' ,
    justifyContent: 'flex-start'
 } ,
 text: {
  fontSize: 40,
  
  fontWeight: 'bold',
  letterSpacing: 0.25,
  fontFamily:'Lobster',
  color: colors.purple ,
  alignItems : 'center' ,
    justifyContent: 'flex-start',
   
  
},
 text3: {
    
    fontWeight: 'bold',
    color:'red',
    alignItems : 'center' ,
    justifyContent: 'flex-start',
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
    height:'100%',
    width:'100%' ,

  },
  
});
export default LoginScreen2