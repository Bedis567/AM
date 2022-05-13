import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"



const HomeScreenProche = (props) => {
  
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}><Text style={styles.title}> Aide-Mémoire </Text></View>
        <View style={{flex:0.2, flexDirection:'row',justifyContent:'center'}}>
        <TouchableOpacity style={{alignItems:'center', margin:20, marginRight:40}} onPress = {() => props.navigation.navigate('Rappels1')}><Ionicons name={"alarm-outline"}
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
          <TouchableOpacity style={{alignItems:'center',marginTop:45,left:-15,marginRight:20}}  onPress = {() => props.navigation.navigate('Problem')}><Ionicons name={'warning-outline'} style={{color:colors.black}} size={60}/>
          <Text style={{marginVertical:10,
            fontFamily:'Montserrat',
            fontSize:18, width:150, textAlign:'center'}}>Déclarer un problème</Text></TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center'}} onPress = {() => props.navigation.navigate('Pilulier4')} ><Image style={{width:100,height:100,marginTop:30}} 
      source={require('../../assets/logopilulier.png')} />
      <Text style={{marginVertical:10,fontFamily:'Montserrat',fontSize:18,textAlign:'center',width:150}}>Configurer Pilulier</Text>
      </TouchableOpacity>


          </View>
          

        </View>
  )
}



const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.primary, flex:1
    },
title:{
  alignItems:'flex-start',
  fontFamily:'Lobster',
  fontSize:48,
  color:colors.purple },
titleContainer:{
  width:"100%",
  height:"30%",
      alignItems: "center",
      
      backgroundColor: colors.primary, flex:0.2

},
container3:{
    flexDirection:'row',
}    ,
text:{
marginVertical:10,
fontFamily:'Montserrat',
fontSize:18
}
})
export default HomeScreenProche