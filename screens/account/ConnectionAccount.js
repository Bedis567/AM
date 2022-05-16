import { View, Text ,StyleSheet,Button,TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import colors from '../../config/colors'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'




const ConnectionAccount = (props) => {
  return (
    <SafeAreaView style={styles.back}>
    <View style={{flex:0.2,paddingTop:adaptToHeight(0.03) ,alignItems:'center', justifyContent:'center'}}>
    <Text style={styles.text}>Aide-Mémoire</Text>
    </View>
    
 
    <View style={{flex:0.5 , alignItems:'center'}}><Ionicons name={"cloud-done-outline"}  style={{color:'black' , justifyContent:'center' }} size={adaptToWidth(0.6)}/>
    <TouchableOpacity style={{flex:0.4, alignItems:'center'}}><Text onPress = {() => props.navigation.navigate('Pilulier1')}  style={{fontSize: 15,fontFamily:'Montserrat-Bold',color:colors.black, width:adaptToWidth(0.75), textAlign:'center'}}> Félicitations! Vous êtes connecté avec votre patient.Il est temps pour configurer le pilulier .</Text>
                      <Text style={{fontSize:15, fontFamily:'Roboto', paddingTop:adaptToHeight(0.009)}}>Passer</Text>
    </TouchableOpacity>

    </View>
     </SafeAreaView>
    )}

 const styles = StyleSheet.create({
   
    text2: {
      fontSize: 30
      ,
      letterSpacing: 0.25,
      fontFamily:'Montserrat',
      color: colors.black ,
      alignItems : 'center' ,
      justifyContent: 'center',
      textAlign:'center' , 

   } ,
   text: {
    fontSize: 48,
    
    letterSpacing: 0.25,
    fontFamily:'Lobster',
    color: colors.purple ,
    alignItems : 'center' ,
      justifyContent: 'flex-start'
     
   },
    back:{
      backgroundColor: colors.primary,
      flex:1
  
    },
    
  })


export default ConnectionAccount