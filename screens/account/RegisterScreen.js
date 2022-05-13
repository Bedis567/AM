import { StyleSheet, Text, View ,ScrollView,SafeAreaView,TouchableOpacity,Linking, Image} from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import Button from '../../components/Button'
import Input from '../../components/input'
import Display from '../../components/Display'
import {Picker} from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Ionicons from "@expo/vector-icons/Ionicons";
import {adaptToHeight, adaptToWidth} from "../../config/Demensions"

const RegisterScreen = (props) => {
    const [selectedStade, setSelectedStade] = useState();
  return (
    <SafeAreaView  style={{ alignItems:'center', flex:1}}>
    
    <View style={{height:'100%', width:'100%',flexDirection:'column'}}>
    <View style={{width: "100%",
       height: "45%",
       alignItems: "center",
       backgroundColor: colors.primary,
       borderBottomColor:'black', borderBottomWidth:0.7}}>
     <Image style={{width: adaptToWidth(0.5),height:adaptToHeight(0.2) , margin: adaptToHeight(0.5) }} 
     source={require('../../assets/logo.png')} />
      <Text style={{fontFamily:"Lobster", margin:5, fontSize:30, color:colors.purple}}>Aide-Mémoire</Text>
     <Text style={{fontFamily:"Lobster", margin:5, fontSize:15}}>Vos biens aimés, en pleine sécurité </Text>
    
     <View style={{width:'100%', height:30, flexDirection:'row',  justifyContent:'space-around'}}>
         <TouchableOpacity style={{alignItems:'center'}}>
         <Text style={{fontFamily:'Montserrat-Bold',fontSize:17 , color:colors.purple}}>S'inscrire</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{alignItems:'center'}}>
             <Text style={{fontFamily:'Montserrat-Bold', fontSize:17}} onPress = {() => props.navigation.navigate('Login_malade')}>Se connecter</Text> 
         </TouchableOpacity>
         </View>
         </View>
         <View style={{justifyContent:'flex-start', alignItems:'center', width:'100%', height:'60%', top: 30}}>
         <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center'}}  > 
             <Text style={{fontFamily:'Roboto', fontSize:20, color:'black'}}>Veuillez entrer vos informations:</Text>
     
     <Input icon="md-person" placeholder="Nom d'utilisateur" />
          <Input icon="md-mail" placeholder="Email" />
          <Input icon="lock-closed-outline" placeholder="Mot de passe"/>
          <Input icon="lock-closed" placeholder="Confirmer le mot de passe" />
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
        <View style={{bottom:20 , padding:10}}>
        <BouncyCheckbox
  size={15}
  fillColor='#8E0798'
  unfillColor="#f7f2e2"
  text="J'accepte les termes et les conditions d'utilisation"
  iconStyle={{ borderColor: colors.purple  }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:15  }}
  onPress={(isChecked) => {}}
  style={{}}
  
/>

        </View>
        <TouchableOpacity style={{marginBottom:90, width:200, height:50, backgroundColor:colors.yesGreen, borderRadius:15, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white' ,marginTop:20}} 
        onPress = {() => props.navigation.navigate('Code')}>
          <Text style={{color:'white', fontFamily:'Roboto-Bold', fontSize:20}}>Confirmer</Text></TouchableOpacity>
         
   </ScrollView>
   </View>
   </View>
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
