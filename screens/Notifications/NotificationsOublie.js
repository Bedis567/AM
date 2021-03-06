import { StyleSheet, Text, View,TouchableOpacity,ScrollView,SafeAreaView,StatusBar } from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"


const NotificationsOublie = (props) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow1, setShouldShow1] = useState(false);
  const [shouldShow2, setShouldShow2] =useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'flex-start', flex:0.15,width:'95%', justifyContent:'center', marginTop:30}}>
        <Text style={styles.title}> Notifications </Text></View>
    <View style={{flex:0.15, flexDirection:'row', justifyContent:'space-between',marginBottom:10, width:350, alignItems:'center'}}>
    <TouchableOpacity style={{alignItems:'center', opacity:0.6}} onPress = {() => props.navigation.navigate('NotificationsPending')}>
      <Ionicons name={'notifications-circle-outline'} style={{color:colors.black}} size={60}/>
      
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:'center' }} onPress = {() => props.navigation.navigate('NotificationsOublie')}>
      <Ionicons name={'close-circle-outline'} style={{color:colors.black}} size={60}/>
      <Text style={{fontFamily:'Montserrat-Bold'}}>Manqué</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:'center', opacity:0.6}} onPress = {() => props.navigation.navigate('NotificationsDone')}>
      <Ionicons name={'checkmark-circle-outline'} style={{color:colors.black}} size={60}/>
      </TouchableOpacity>
    </View>
    <View style={{ flex:0.5, width:'100%', padding: 30,alignItems:'center'}} >
   <ScrollView style={{width:'100%'}}>
   <TouchableOpacity style={{backgroundColor:colors.violetPastel,flexWrap:'wrap', borderWidth:0.8, borderRadius:50, flexDirection:'column'}} onPress={() => setShouldShow1(!shouldShow1)}>
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:350, height:50}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:30 }}>time</Text>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:30 }}>description</Text>
       </View>
       {shouldShow1 ? (
          <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'center', marginTop:30, marginBottom:30, borderTopWidth:1, width:350}}>
         <TouchableOpacity>
          <Text style={{fontFamily:'Roboto-Bold', fontSize:20}}>En Cours</Text>
          </TouchableOpacity>
         <TouchableOpacity>
          <Text style={{fontFamily:'Roboto-Bold', fontSize:20}}>Fait</Text></TouchableOpacity>
          </View>
        ) : null}
   </TouchableOpacity>
   <TouchableOpacity style={{backgroundColor:colors.PastelOrange,flexWrap:'wrap', borderWidth:0.8, borderRadius:50, flexDirection:'column', marginTop:30}} >
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:350, height:50}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:30 }}>time</Text>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20,marginRight:30 }}>Pillule</Text>
       </View></TouchableOpacity>
   </ScrollView>
   </View>
   <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
   
   </View>
    </SafeAreaView>
  )
}

export default NotificationsOublie

const styles = StyleSheet.create({ 
  container:{
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 ,
  alignItems: "center",
  backgroundColor: colors.primary,
  flex:1
},
title:{
  alignItems:'flex-start',
  fontFamily:'Lobster',
  fontSize:48,
  color:colors.black },
  
})