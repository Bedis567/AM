import { StyleSheet, Text, View,ScrollView,TouchableOpacity,SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'

const RappelsUtiles = (props) => {
    const [shouldShow, setShouldShow] = useState(false);
  return (
    <SafeAreaView style={{backgroundColor: colors.primary,flex:1 ,alignItems:'center'}}>
        <View style={styles.titleContainer}><Text style={styles.title}>Rappels Utiles</Text></View>  
        
            <View style={{width:adaptToWidth(1),flex:0.6, alignSelf:'center',borderTopWidth:1 }}>
    <ScrollView style={{width:adaptToWidth(1), }} contentContainerStyle={{alignItems:'center'}} fadingEdgeLength={adaptToHeight(0.5)}>
   
    <TouchableOpacity 
   style={{backgroundColor:'white',flexWrap:'wrap', borderWidth:0.8, borderRadius:50, flexDirection:'column', marginTop:adaptToHeight(0.05)}}
    onPress={() => setShouldShow(!shouldShow)}>
    
     <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:adaptToWidth(0.8),
      height:adaptToHeight(0.065)}}>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20 }}>Heure</Text>
       <Text style={{fontFamily:'Montserrat-Bold', fontSize:20 }}>Rappel</Text>
       </View>
       {shouldShow ? (
          <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'center', marginTop:adaptToHeight(0.04), 
          marginBottom:adaptToHeight(0.04), borderTopWidth:1, width:adaptToWidth(0.8)}}>
         <TouchableOpacity>
          <Text style={{fontFamily:'Roboto-Bold', fontSize:20}}>Modifer</Text>
          </TouchableOpacity>
         <TouchableOpacity>
          <Text style={{fontFamily:'Roboto-Bold', fontSize:20}}>Supprimer</Text></TouchableOpacity>
          </View>
        ) : null}
   </TouchableOpacity>
    </ScrollView>
</View>
       <TouchableOpacity style={{flex:0.13,justifyContent:'flex-end'}} > 
          <View style={{flexDirection:'row',justifyContent:'center', alignItems:'baseline'}}>
      <Ionicons name={"notifications"} style={{ color: colors.yesGreen }} size={60}/> 
      <Ionicons name={"add-circle-outline"} style={{ color: colors.yesGreen, fontWeight:'300' }} size={20}/></View>
      <Text style={styles.text}>Ajouter un Rappel</Text>
          </TouchableOpacity>
          </SafeAreaView>
  
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        backgroundColor: colors.primary
    },
    title:{
        alignItems:'flex-start',
        fontFamily:'Lobster',
        fontSize:48,
        color:colors.black },
    titleContainer:{
        flex:0.2,
            alignItems: "center",
            backgroundColor: colors.primary,
            justifyContent:'center'
    },
    text:{
        marginVertical:10,
        fontFamily:'Roboto',
        fontSize:20
        }
})
export default RappelsUtiles

