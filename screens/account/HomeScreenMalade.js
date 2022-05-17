<<<<<<< HEAD
import { StyleSheet, Text, View,Image } from 'react-native'
=======
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native'
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
import React from 'react'
import colors from '../../config/colors'
import { TouchableOpacity } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons"
<<<<<<< HEAD

=======
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e


const HomeScreenMalade = (props) => {
  
  return (
<<<<<<< HEAD
    <View style={styles.container} >
   <TouchableOpacity style={{flex:0.4,top:50}} onPress = {() => props.navigation.navigate('Urgence1')}> 
     <Image style={{width:150,height:150}}  
=======
    <SafeAreaView style={styles.container} >
   <TouchableOpacity style={{ paddingVertical:adaptToHeight(0.025), paddingHorizontal:adaptToWidth(0.025)}}
    onPress = {() => props.navigation.navigate('Urgence1')}> 
     <Image style={{width:adaptToWidth(0.28),height:adaptToHeight(0.2)}}  
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
      source={require('../../assets/urgencelogo.png')} />
      
      </TouchableOpacity>
        <View style={styles.titleContainer}><Text style={styles.title}> Aide-Mémoire </Text></View>
      <View style={styles.container3}>

<<<<<<< HEAD
          <View style={{justifyContent:'space-between',right:30}}>
            <TouchableOpacity style={{alignItems:'center'}}><Ionicons name={"images"}
          style={{ color: '#cc0000' }}
          size={90} />
          <Text style={styles.text}>Memories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center'}}><Ionicons name={"game-controller"}
          style={{ color: colors.blue }}
          size={90} /><Text style={styles.text} >Jeux</Text></TouchableOpacity>
          </View>
                    <View style={{justifyContent:'space-between',alignItems:'center',left:40}}> 
                    <TouchableOpacity style={{alignItems:'center'}}><Ionicons name={"notifications-circle"}
          style={{ color: colors.yesGreen}}
          size={90} /><Text style={styles.text3}  numberOfLines={2}>Espace de notifications</Text></TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}><Ionicons name={"document"}
          style={{ color: colors.yellow }}
          size={90} /><Text style={styles.text}>Diary</Text></TouchableOpacity>
          </View>
      </View>
    </View>
=======
          <View style={{justifyContent:'center'}}>
            <TouchableOpacity style={{alignItems:'center', padding:adaptToHeight(0.04)}}>
              <Ionicons name={"images"}
          style={{ color: '#cc0000' }}
          size={adaptToWidth(0.25)} />
          <Text style={styles.text}>Memories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center', padding:adaptToHeight(0.04)}}>
            <Ionicons name={"game-controller"}
          style={{ color: colors.blue }}
          size={adaptToWidth(0.25)} />
          <Text style={styles.text} >Jeux</Text></TouchableOpacity>
          </View>
                    <View style={{justifyContent:'space-around',alignItems:'center'}}> 

                    <TouchableOpacity style={{alignItems:'center', padding:adaptToHeight(0.04) }}  onPress = {() => props.navigation.navigate('NotificationsPending')}>

                      <Ionicons name={"notifications-circle"}
          style={{ color: colors.yesGreen}}
          size={adaptToWidth(0.25)} /><Text style={styles.text3}  numberOfLines={2}>Espace de notifications</Text>
          </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center', padding:adaptToHeight(0.04)}}>
                      <Ionicons name={"document"}
          style={{ color: colors.yellow }}
          size={adaptToWidth(0.25)} /><Text style={styles.text}>Diary</Text></TouchableOpacity>
          </View>
      </View>
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
  flex:0.3,
=======
    fontFamily:'Lobster',
    fontSize:48,
    color:colors.purple },
titleContainer:{
  flex:0.5,
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
        alignItems: "center",
        backgroundColor: colors.primary,
        
},
container3:{
    flexDirection:'row',
}    ,
text:{
<<<<<<< HEAD
marginVertical:10,
fontFamily:'Montserrat',
fontSize:18,
textAlign:'center',
width:105
},
text3:{
  marginVertical:10,
  fontFamily:'Montserrat',
  fontSize:18,
  textAlign:'center',
  width:130 ,
=======
marginVertical:adaptToHeight(0.02),
fontFamily:'Montserrat',
fontSize:18,
textAlign:'center',
width:adaptToWidth(0.3)
},
text3:{
  marginVertical:adaptToHeight(0.01),
  fontFamily:'Montserrat',
  fontSize:17,
  textAlign:'center',
  width:adaptToWidth(0.3) ,
  
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
 
  }
})
export default HomeScreenMalade