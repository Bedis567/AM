import { StyleSheet, Text, View, ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import Demensions from '../../config/Demensions'

const ChoixPilulier = (props) => {
  return (
      <View style={styles.container}>
          <View ><Text style={styles.title}>Aide-Mémoire</Text></View>  
    <ScrollView style={{ width:'100%', marginVertical:50}} contentContainerStyle={{alignItems:'center'}}>
    <TouchableOpacity style={{marginBottom:10}}>
       <View style={{alignItems:'center', borderColor:'black', borderWidth:2,  width:340}}><Image style={{width:200,height:200,marginTop:20}} 
      source={require('../../assets/Pilbox.png')} />
      <Text style={{fontFamily:'Montserrat-Bold', fontSize:30, color:'black'}}  onPress = {() => props.navigation.navigate('Pilulier3')}>Semainier Simplifié</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginBottom:10}}>
      <View style={{alignItems:'center', borderColor:'black', borderWidth:2,  width:340}}>
          <Image style={{width:200,height:200,marginTop:20}} 
      source={require('../../assets/spécial.png')} />
      <Text style={{fontFamily:'Montserrat-Bold', fontSize:30, color:'black'}}  onPress = {() => props.navigation.navigate('Pilulier3')}>Spécial Alzheimer</Text>
      </View>
      </TouchableOpacity>
     <TouchableOpacity style={{marginBottom:10}}>
     <View style={{alignItems:'center', borderColor:'black', borderWidth:2,  width:340}}>
         <Image style={{width:200,height:200,marginTop:20}} 
      source={require('../../assets/semainier.png')} />
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:30, color:'black'}}  onPress = {() => props.navigation.navigate('Pilulier3')}>Semainier Classique</Text>
       </View>
      </TouchableOpacity>
     <TouchableOpacity>
     <View style={{alignItems:'center', borderColor:'black', borderWidth:2, width:340}}>
         <Image style={{width:200,height:200,marginTop:20}} 
      source={require('../../assets/journalier.png')} />
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:30, color:'black'}}  onPress = {() => props.navigation.navigate('Pilulier3')}>journalier</Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:colors.purple, width:'60%', height:70, justifyContent:'center', alignItems:'center', borderRadius:50, margin:25}}><Text style={{color:'white', fontFamily:'Montserrat-Bold',fontSize:30 }}  onPress = {() => props.navigation.navigate('Pilulier3')}>Autre</Text></TouchableOpacity>
      <TouchableOpacity><Text style={{fontFamily:'Montserrat-Bold', color:'black', fontSize:15}}  onPress = {() => props.navigation.navigate('Home_proche')}>Passer pour le moment</Text></TouchableOpacity>
 </ScrollView></View>
  )
}

export default ChoixPilulier

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems:'center',
        backgroundColor: colors.primary, flex:1
        
    },
    title:{
        textAlign: 'center',
        fontSize:48,
        color: colors.purple ,
        fontFamily:'Lobster',
        justifyContent:'center', top:30},
   
})