<<<<<<< HEAD
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"

=======
import { StyleSheet, Text, View,Image,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e


const HomeScreenProche = (props) => {
  
  return (
<<<<<<< HEAD
    <View style={styles.container}>
        <View style={styles.titleContainer}><Text style={styles.title}> Aide-Mémoire </Text></View>
        <View style={{flex:0.2, flexDirection:'row',justifyContent:'center'}}>
        <TouchableOpacity style={{alignItems:'center', margin:20, marginRight:40}}><Ionicons name={"alarm-outline"}
          style={{ color: colors.black }}
          size={60} />
          <Text style={styles.text}>Mes Rappels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center', margin:20}}><Ionicons name={"locate-outline"}
          style={{ color: colors.black }}
          size={60} /><Text style={{marginVertical:10,
            fontFamily:'Montserrat',
            fontSize:18, width:150, textAlign:'center'}}>Localiser mon Malade</Text></TouchableOpacity>  
          </View>

          <View style={{flex:0.18, flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'center',margin:25, marginLeft:30, marginRight:40}}>
            <View style={{flexDirection:'row',justifyContent:'flex-end',left:15}}><Ionicons name={"game-controller-outline"}
          style={{ color: colors.black }}
          size={60} /><Ionicons name={"add-circle-outline"} style={{ color: colors.black, fontWeight:'300' }} size={25}/></View>
          <Text style={styles.text}>Ajouter un Jeu</Text></TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center',margin:25, marginRight:45}}><Ionicons name={"notifications-circle-outline"}
          style={{ color: colors.black }}
          size={60} /><Text style={styles.text}>Rappels Malade</Text></TouchableOpacity>

          </View>
          <View style={{flex:0.18, flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'center',marginTop:20,left:-5,marginRight:40}}><Ionicons name={'person-circle-outline'} style={{color:colors.black}} size={60}/>
          <Text style={styles.text}>Gérer les profils</Text></TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center',marginTop:20,marginright:48}}><Ionicons name={"images-outline"}
          style={{ color: colors.black }}
          size={60} /><Text style={{marginVertical:10,
            fontFamily:'Montserrat',
            fontSize:18, width:150, textAlign:'center'}}>Ajouter dans Memories</Text></TouchableOpacity>

          </View>
          <View style={{flex:0.3, flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'center',marginTop:45,left:-15,marginRight:20}}><Ionicons name={'warning-outline'} style={{color:colors.black}} size={60}/>
          <Text style={{marginVertical:10,
            fontFamily:'Montserrat',
            fontSize:18, width:150, textAlign:'center'}}>Déclarer un problème</Text></TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center'}}><Image style={{width:100,height:100,marginTop:30}} 
      source={require('../../assets/logopilulier.png')} />
      <Text style={{marginVertical:10,fontFamily:'Montserrat',fontSize:18,textAlign:'center',width:150}}>Configurer Pilulier</Text>
=======
    <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}><Text style={styles.title}> Aide-Mémoire </Text></View>
        <View style={{flex:0.2, flexDirection:'row',justifyContent:'center'}}>
        <TouchableOpacity style={{alignItems:'center', margin:adaptToWidth(0.045), marginRight:adaptToWidth(0.095)}} 
        onPress = {() => props.navigation.navigate('Rappels3')}>
          <Ionicons name={"alarm-outline"}
          style={{ color: colors.black }}
          size={adaptToHeight(0.08)} />
          <Text style={styles.text}>Mes Rappels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center', margin:adaptToWidth(0.045)}} onPress = {() => props.navigation.navigate('Localisation')} ><Ionicons name={"locate-outline"}
          style={{ color: colors.black }}
          size={adaptToHeight(0.08)} /><Text style={{marginVertical:adaptToHeight(0.02),
            fontFamily:'Montserrat',
            fontSize:18, width:adaptToWidth(0.4), textAlign:'center'}}>Localiser mon Malade</Text></TouchableOpacity>  
          </View>

          <View style={{flex:0.18, flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'center',margin:adaptToHeight(0.03), marginLeft:adaptToWidth(0.3), marginRight:adaptToWidth(0.08)}}>
            <View style={{flexDirection:'row',justifyContent:'flex-end',left:adaptToWidth(0.04)}}>
              <Ionicons name={"game-controller-outline"}
          style={{ color: colors.black }}
          size={adaptToHeight(0.08)} /><Ionicons name={"add-circle-outline"} style={{ color: colors.black, fontWeight:'300' }} size={adaptToHeight(0.025)}/></View>
          <Text style={styles.text}>Ajouter un Jeu</Text></TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center',marginVertical:adaptToHeight(0.03), marginLeft:adaptToWidth(0.06), marginRight:adaptToWidth(0.15)}}  onPress = {() => props.navigation.navigate('RappelsEtPilulierPending')}>
            <Ionicons name={"notifications-circle-outline"}
          style={{ color: colors.black }}
          size={adaptToHeight(0.08)} /><Text style={styles.text}>Rappels Malade</Text></TouchableOpacity>

          </View>
          <View style={{flex:0.18, flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'center',marginTop:adaptToHeight(0.03),marginRight:adaptToWidth(0.1)}}>
            <Ionicons name={'person-circle-outline'} style={{color:colors.black}} size={adaptToHeight(0.08)}/>
          <Text style={styles.text}>Gérer les profils</Text></TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center',marginTop:adaptToHeight(0.03)}}><Ionicons name={"images-outline"}
          style={{ color: colors.black }}
          size={adaptToHeight(0.08)} /><Text style={{marginVertical:adaptToHeight(0.02),
            fontFamily:'Montserrat',
            fontSize:18, width:adaptToWidth(0.4), textAlign:'center'}}>Ajouter dans Memories</Text></TouchableOpacity>

          </View>
          <View style={{flex:0.3, flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity 
          style={{alignItems:'center',marginTop:adaptToHeight(0.062),left:-adaptToWidth(0.05),marginRight:adaptToWidth(0.15)}} onPress = {() => props.navigation.navigate('Problem')} >
            <Ionicons name={'warning-outline'} style={{color:colors.black}} size={adaptToHeight(0.08)}/>
          <Text style={{marginVertical:adaptToHeight(0.02),
            fontFamily:'Montserrat',
            fontSize:18, width:adaptToWidth(0.35), textAlign:'center'}}>Déclarer un problème</Text></TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center', width:adaptToWidth(0.25), height:adaptToHeight(0.4)}}
           onPress = {() => props.navigation.navigate('Pilulier4')} >
            <Image style={{width:adaptToWidth(0.18),height:adaptToHeight(0.126),marginTop:adaptToHeight(0.035) , resizeMode:'stretch'}} 
      source={require('../../assets/logopilulier.png')} />
      <Text style={{marginVertical:adaptToHeight(0.02),fontFamily:'Montserrat',fontSize:18,textAlign:'center',width:adaptToWidth(0.4)}}>Configurer Pilulier</Text>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
      </TouchableOpacity>


          </View>
          

<<<<<<< HEAD
        </View>
=======
        </SafeAreaView>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
  )
}



const styles = StyleSheet.create({
    container: {
<<<<<<< HEAD
        width: "100%",
        height: "100%",
=======
       
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
        alignItems: "center",
        backgroundColor: colors.primary, flex:1
    },
title:{
  alignItems:'flex-start',
<<<<<<< HEAD
  fontFamily:'lobster',
  fontSize:48,
  color:colors.purple },
titleContainer:{
  width:"100%",
  height:"30%",
      alignItems: "center",
      
=======
  fontFamily:'Lobster',
  fontSize:48,
  color:colors.purple },

titleContainer:{
  
      alignItems: "center",
      justifyContent:'center',
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
      backgroundColor: colors.primary, flex:0.2

},
container3:{
    flexDirection:'row',
}    ,
text:{
<<<<<<< HEAD
marginVertical:10,
=======
marginVertical:adaptToHeight(0.02),
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
fontFamily:'Montserrat',
fontSize:18
}
})
export default HomeScreenProche