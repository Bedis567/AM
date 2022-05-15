import { StyleSheet, Text, View,TouchableOpacity,ScrollView, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"



const NotificationsDone = () => {
 

  return (
    <SafeAreaView style={styles.container}>
    <View style={{alignItems:'flex-start', flex:0.15,width:'95%', justifyContent:'center', marginTop:30}}><Text style={styles.title}> Notifications </Text></View>
    <View style={{flex:0.15, flexDirection:'row', justifyContent:'space-between',marginBottom:30, width:350, alignItems:'center'}}>
    <TouchableOpacity style={{alignItems:'center', opacity:0.6}}>
      <Ionicons name={'notifications-circle-outline'} style={{color:colors.black}} size={60} />
      
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:'center', opacity:0.6}}>
      <Ionicons name={'close-circle-outline'} style={{color:colors.black}} size={60}/>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:'center'}}>
      <Ionicons name={'checkmark-circle-outline'} style={{color:colors.black}} size={60}/>
      <Text style={{fontFamily:'Montserrat-Bold'}}>Fait</Text>
      </TouchableOpacity>
    </View>
    <View style={{ flex:0.5, width:'100%', padding: 30,alignItems:'center'}} >
   <ScrollView style={{width:'100%'}}>
   <TouchableOpacity style={{backgroundColor:colors.violetPastel,flexWrap:'wrap', borderWidth:0.8, borderRadius:50, flexDirection:'column'}}>
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:350, height:50}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:30 }}>time</Text>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:30 }}>description</Text>
       </View>
   </TouchableOpacity>


   <TouchableOpacity style={{backgroundColor:colors.PastelYellow,flexWrap:'wrap', borderWidth:0.8, borderRadius:50, flexDirection:'column', marginTop:30}} >
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:350, height:50}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:30 }}>time</Text>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:30 }}>description</Text>
       </View>
       
   </TouchableOpacity>
   <TouchableOpacity style={{backgroundColor:colors.PastelOrange,flexWrap:'wrap', borderWidth:0.8, borderRadius:50, flexDirection:'column', marginTop:30}} >
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:350, height:50}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:30 }}>time</Text>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:30 }}>Pillule</Text>
       </View>
       
        </TouchableOpacity>


   </ScrollView>
   </View>
   
    </SafeAreaView>
  )
}

export default NotificationsDone

const styles = StyleSheet.create({ 
  container: {
  alignItems: "center",
  backgroundColor: colors.primary, flex:1
},
title:{
alignItems:'flex-start',
fontFamily:'Lobster',
fontSize:48,
color:colors.black },

})