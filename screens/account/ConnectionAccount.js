import { View, Text ,StyleSheet,Button,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import colors from '../../config/colors'




const ConnectionAccount = (props) => {
  return (
    <View style={styles.back}>
    <View style={{marginVertical:30 , alignItems:'center'}}>
    <Text style={styles.text}>Aide-Mémoire</Text>
    </View>
    
 
    <View style={{marginVertical:12 , alignItems:'center'}}><Ionicons name={"cloud-done-outline"}  style={{color:colors.black , justifyContent:'center' }} size={200}/>
    <TouchableOpacity><Text onPress = {() => props.navigation.navigate('')} style={styles.text2}> Félicitations! Vous êtes connecté avec votre patient.Il est temps pour configurer le pilulier .</Text>
    </TouchableOpacity>

    </View>
     </View>
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
    fontSize: 40,
    
    fontWeight: 'bold',
    letterSpacing: 0.25,
    fontFamily:'lobster',
    color: colors.purple ,
    alignItems : 'center' ,
      justifyContent: 'flex-start'
     
   },
    back:{
      backgroundColor: colors.primary,
      height:'100%',
      width:'100%' 
  
    },
    
  })


export default ConnectionAccount