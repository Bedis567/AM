import { StyleSheet, Text, View, TouchableOpacity,Image , ScrollView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import Input from '../../components/input'


const LoginScreenMalade = (props) => {
  return (
    <View style={{height:'100%', width:'100%',flexDirection:'column', flex:1}}>
    <View style={{width: "100%",
       height: "45%",
       alignItems: "center",
       backgroundColor: colors.primary,
       borderBottomColor:'black', borderBottomWidth:0.7}}>
         
     <Image style={{width:"45%",height:"52%", top:30 }} 
     source={require('../../assets/logo.png')} />
      <Text style={{fontFamily:"Lobster", margin:5, fontSize:30, top:40 , color:colors.purple}}>Aide-Mémoire</Text>
     <Text style={{fontFamily:"Lobster", margin:5, fontSize:15, top:40}}>Vos biens aimés, en pleine sécurité </Text>
    
     <View style={{width:'100%', height:30, flexDirection:'row', top:50, justifyContent:'space-around'}}>
         <TouchableOpacity style={{alignItems:'center'}}>
         <Text style={{fontFamily:'Montserrat-Bold',fontSize:17 }} onPress = {() => props.navigation.navigate('Register_malade')}>S'inscrire</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{alignItems:'center'}}>
             <Text style={{fontFamily:'Montserrat-Bold', fontSize:17 , color:colors.purple}} >Se connecter</Text> 
         </TouchableOpacity>
         </View>
         </View>
         <View style={{justifyContent:'flex-start', alignItems:'center', width:'100%', height:'60%', top: 30}}>
         <ScrollView style={{flex:0.65}} contentContainerStyle={{alignItems:'center'}}  > 
             <Text style={{fontFamily:'Roboto', fontSize:20, color:'black'}}>Veuillez entrer vos informations:</Text>
          <Input icon="md-mail" placeholder="Email" />
          <Input icon="lock-closed-outline" placeholder="Mot de passe" />
          <TouchableOpacity style={{bottom:20, width:200, height:50, backgroundColor:colors.yesGreen, borderRadius:15, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white' ,marginTop:20}}>
              <Text style={{color:'white', fontFamily:'Roboto-Bold', fontSize:20}} onPress = {() => props.navigation.navigate('Home_malade')}>Se Connecter</Text>
          </TouchableOpacity>
          <View style={{alignItems: "center", justifyContent: "center", flexDirection:'row'}}>
          
          <Text style={{fontFamily:'Montserrat-Bold', color:'black', fontSize:15}} >Vous n'avez pas de compte ? </Text>
         
          <TouchableOpacity>
          <Text style={{fontFamily:'Montserrat-Bold', color:'black', fontSize:15 ,color:colors.yesGreen}}  onPress = {() => props.navigation.navigate('Register_proche')}>S'inscrire </Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
          </View>
    </View>
  )
}

export default LoginScreenMalade

const styles = StyleSheet.create({})
