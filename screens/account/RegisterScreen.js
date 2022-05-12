import { StyleSheet, Text, View ,ScrollView,SafeAreaView,TouchableOpacity,Linking} from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import Button from '../../components/Button'
import Input from '../../components/input'
import Display from '../../components/Display'
import {Picker} from '@react-native-picker/picker';

import Ionicons from "@expo/vector-icons/Ionicons";


const RegisterScreen = (props) => {
    const [selectedStade, setSelectedStade] = useState();
  return (
    <SafeAreaView  style={{backgroundColor:colors.primary, alignItems:'center', flex:1}}>
    
      <View style={{flex:0.2}}><Text style={styles.textStyle}>Aide-Mémoire</Text></View> 
      <View style={{backgroundColor:colors.purplelight,justifyContent: "center",flex:0.15, width:"100%"}}>
      <Text style={styles.textStyle2}>Créer le profil du malade</Text></View> 
     <ScrollView style={{flex:0.65}} contentContainerStyle={{alignItems:'center'}}  > 
     <Input icon="md-person" placeholder="Nom d'utilisateur" />
          <Input icon="md-mail" placeholder="Email" />
          <Display icon="md-location" label="location"/>
          <Input icon="md-call" placeholder="Contact Médecin"/>
         <View><Text style={styles.textStyle3}>Stade de Maladie</Text><View style={{backgroundColor:"#ddd", borderRadius:12, marginVertical:14}}><Picker
  selectedValue={selectedStade}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedStade(itemValue)}
    itemStyle={{ backgroundColor: "Black", color: "blue", fontFamily:"Montserrat", fontSize:17 }} >
  <Picker.Item label="Stade 2" value="s2" />
  <Picker.Item label="Stade 3" value="s3" />
  <Picker.Item label="Stade 4" value="s4" />
  <Picker.Item label="Stade 5" value="s5" />
</Picker></View>
       <Text style={styles.textStyle3}>Attachez une photo du Patient </Text>
          <View style={{alignItems:'center', marginVertical:30}}><TouchableOpacity style={{width:200,height:200, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
              <Ionicons
          name="add-outline"
          style={{color:colors.grey}}
          size={150}
        /> 
        </TouchableOpacity></View>
        </View> 
        <TouchableOpacity style={{bottom:20, width:200, height:50, backgroundColor:colors.purplelight, borderRadius:15, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white' ,marginTop:20}} onPress = {() => props.navigation.navigate('Scan_code')}><Text style={{fontFamily:'Montserrat-Bold',fontSize:20}}>Confirmer</Text></TouchableOpacity>
      
         
   </ScrollView>
   
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      flex:1
      
    },
    input:{
      borderWidth: 3,
      width:300,
      height:40,
      padding:10,
      borderColor:"black"
    },
  inputContainer:{
    
  alignItems:'center',
  top:60

  },

  textStyle:{
    fontSize: 48,
    letterSpacing: 0.25,
    fontFamily:'Lobster',
    color: colors.purple ,
    alignItems : 'center' ,
      justifyContent: 'flex-start',
     


  },
  textStyle2:{
    fontSize:25,
    letterSpacing: 0.25,
    fontFamily:'Montserrat',
    color: colors.black ,
    alignItems : 'center' ,
    justifyContent: 'center' ,
    textAlign:'center'
  },
  textStyle3:{
    textAlign:'center',
    fontSize:20,
    color: colors.black,
    fontFamily:'Montserrat'
    
},

  container1: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  container2: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    width: 8 / 1.2,
    borderRadius: 15,
    marginVertical: 10,
  },
  Container3: {
      alignItems:'center'
  },
 
})
 

export default RegisterScreen
