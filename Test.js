import { StyleSheet, Text, View, TouchableOpacity,Image , ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import colors from './config/colors'
import Input from './components/input'
import { adaptToHeight, adaptToWidth } from './config/Demensions'

  const Test = (props) => {
    return (
      <SafeAreaView style={{flexDirection:'column', flex:1}}>
      <View style={{flex:0.4,
         alignItems: "center",
         backgroundColor: colors.primary,
         borderBottomColor:'black', borderBottomWidth:0.7, justifyContent:'flex-end'}}>
           
       <Image style={{width:adaptToWidth(0.5),height:adaptToHeight(0.23), marginTop:adaptToHeight(0.06)}} 
       source={require('./assets/logo.png')} />
        <Text style={{fontFamily:"Lobster", margin:adaptToHeight(0.01), fontSize:30, color:colors.purple}}>Aide-Mémoire</Text>
       <Text style={{fontFamily:"Lobster", margin:5, fontSize:15}}>Vos biens aimés, en pleine sécurité </Text>
      
       <View style={{ width:adaptToWidth(0.9),flexDirection:'row', justifyContent:'space-around'}}>
           <TouchableOpacity style={{alignItems:'center'}}>
           <Text style={{fontFamily:'Montserrat-Bold',fontSize:17 }} 
          onPress = {() => props.navigation.navigate('Register_proche')}>S'inscrire</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{alignItems:'center'}}>
               <Text style={{fontFamily:'Montserrat-Bold', fontSize:17 , color:colors.purple}} >Se connecter</Text> 
           </TouchableOpacity>
           </View>
           </View>



           <View style={{justifyContent:'flex-start', alignItems:'center', flex:0.6}}>
           <ScrollView style={{flex:0.65}} contentContainerStyle={{alignItems:'center'}}  > 
               <Text style={{fontFamily:'Roboto', fontSize:20, color:'black'}}>Veuillez entrer vos informations:</Text>
            <Input icon="md-mail" placeholder="Email" />
            <Input icon="lock-closed-outline" placeholder="Mot de passe" />
            <TouchableOpacity style={{bottom:20, width:200, height:50, backgroundColor:colors.yesGreen, borderRadius:15, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white' ,marginTop:20}}>
                <Text style={{color:'white', fontFamily:'Roboto-Bold', fontSize:20}} onPress = {() => props.navigation.navigate('Home_proche')}>Se Connecter</Text>
            </TouchableOpacity>
            <View style={{alignItems: "center", justifyContent: "center", flexDirection:'row'}}>
            
            <Text style={{fontFamily:'Montserrat-Bold', color:'black', fontSize:15}} >Vous n'avez pas de compte ? </Text>
           
            <TouchableOpacity>
            <Text style={{fontFamily:'Montserrat-Bold', color:'black', fontSize:15 ,color:colors.yesGreen}}  onPress = {() => props.navigation.navigate('Register_proche')}>S'inscrire </Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
      </SafeAreaView>
    )
  }
 
  
export default Test

const styles = StyleSheet.create({
  button:{
    padding:adaptToHeight(0.01),
     width:adaptToWidth(0.5), 
     height:adaptToHeight(0.065), 
     backgroundColor:colors.yesGreen, 
     borderRadius:15,
     alignItems:'center', 
     justifyContent:'center',
     borderWidth:1, 
     borderColor:'white' ,
     marginTop:adaptToHeight(0.03)
  }
})
