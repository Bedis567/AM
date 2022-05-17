<<<<<<< HEAD
import { View, Text ,StyleSheet,Button,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import colors from '../../config/colors'
=======
import { View, Text ,StyleSheet,Button,TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import colors from '../../config/colors'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e




const ConnectionAccount = (props) => {
  return (
<<<<<<< HEAD
    <View style={styles.back}>
    <View style={{marginVertical:30 , alignItems:'center'}}>
=======
    <SafeAreaView style={styles.back}>
    <View style={{flex:0.2,paddingTop:adaptToHeight(0.03) ,alignItems:'center', justifyContent:'center'}}>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
    <Text style={styles.text}>Aide-Mémoire</Text>
    </View>
    
 
<<<<<<< HEAD
    <View style={{marginVertical:12 , alignItems:'center'}}><Ionicons name={"cloud-done-outline"}  style={{color:colors.black , justifyContent:'center' }} size={200}/>
    <TouchableOpacity><Text onPress = {() => props.navigation.navigate('')} style={styles.text2}> Félicitations! Vous êtes connecté avec votre patient.Il est temps pour configurer le pilulier .</Text>
    </TouchableOpacity>

    </View>
     </View>
=======
    <View style={{flex:0.5 , alignItems:'center'}}><Ionicons name={"cloud-done-outline"}  style={{color:'black' , justifyContent:'center' }} size={adaptToWidth(0.6)}/>
    <TouchableOpacity style={{flex:0.4, alignItems:'center'}}><Text onPress = {() => props.navigation.navigate('Pilulier1')}  style={{fontSize: 15,fontFamily:'Montserrat-Bold',color:colors.black, width:adaptToWidth(0.75), textAlign:'center'}}> Félicitations! Vous êtes connecté avec votre patient.Il est temps pour configurer le pilulier .</Text>
                      <Text style={{fontSize:15, fontFamily:'Roboto', paddingTop:adaptToHeight(0.009)}}>Passer</Text>
    </TouchableOpacity>

    </View>
     </SafeAreaView>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
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
<<<<<<< HEAD
    fontSize: 40,
    
    fontWeight: 'bold',
    letterSpacing: 0.25,
    fontFamily:'lobster',
=======
    fontSize: 48,
    
    letterSpacing: 0.25,
    fontFamily:'Lobster',
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
    color: colors.purple ,
    alignItems : 'center' ,
      justifyContent: 'flex-start'
     
   },
    back:{
      backgroundColor: colors.primary,
<<<<<<< HEAD
      height:'100%',
      width:'100%' 
=======
      flex:1
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
  
    },
    
  })


export default ConnectionAccount