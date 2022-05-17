import { StyleSheet, Text, View,Image,StatusBar,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import colors from '../../config/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "@expo/vector-icons/Ionicons"
import input from '../../components/input';






const AjoutContacts = () => {
   
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView  style={{backgroundColor:colors.primary, alignItems:'center', flex:1}}>
       
       <View style={{flex:0.3}}><Text style={styles.textStyle}>Aide-Mémoire</Text></View> 
<View style={{flex:0.3}}>
    <Text style={{fontFamily:'Montserrat-Bold', fontSize:38, textAlign:'center'}}>Ajouter d'autres contacts d'urgence</Text>
    </View>
    <TouchableOpacity 
    style={{width:'80%',height:'7%', backgroundColor:colors.lightGrey, borderRadius:50, justifyContent:'center',alignItems:'center', flexDirection:'row', marginBottom:30}}>
       
           <Ionicons
          name={'qr-code-outline'}
          size={30}
          style={{marginRight:20}}
        />
        <Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Ouvrir la Camera</Text>
        </TouchableOpacity>
        <Text style={{fontFamily:'Montserrat-Bold', fontSize:34, textAlign:'center', marginBottom:30}}>OU</Text>
        <View style={{width:'80%',height:'7%', backgroundColor:colors.lightGrey, borderRadius:50, justifyContent:'center',alignItems:'flex-start'}}>
        <TextInput
        onChangeText={onChangeText}
        placeholder="Ajouter le code manuellement"
        style={{fontFamily:'Montserrat-Bold', fontSize:15, width:'80%', left:20, flex :0.4}}
      />
      
        </View>
        <TouchableOpacity style={{width:'50%', height:'7%', backgroundColor:colors.yesGreen, borderRadius:15, marginTop:30, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}}>
          <Text style={{fontFamily:'Montserrat-Bold', fontSize: 25, color:colors.white}}>Ajouter</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default AjoutContacts

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary
      },
      textStyle:{
        textAlign: 'center',
        fontSize:48,
        color: colors.purple ,
<<<<<<< HEAD
        fontFamily:'lobster',
=======
        fontFamily:'Lobster',
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
        top:20,
        justifyContent:'flex-start',}
})