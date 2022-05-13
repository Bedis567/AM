import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { TouchableOpacity } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons"



const HomeScreenMalade = (props) => {
  
  return (
    <View style={styles.container} >
   <TouchableOpacity style={{ padding:10}} onPress = {() => props.navigation.navigate('Urgence1')}> 
     <Image style={{width:150,height:150}}  
      source={require('../../assets/urgencelogo.png')} />
      
      </TouchableOpacity>
        <View style={styles.titleContainer}><Text style={styles.title}> Aide-Mémoire </Text></View>
      <View style={styles.container3}>

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
  flex:0.3,
        alignItems: "center",
        backgroundColor: colors.primary,
        
},
container3:{
    flexDirection:'row',
}    ,
text:{
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
 
  }
})
export default HomeScreenMalade