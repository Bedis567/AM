import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React ,{ useState }from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"

<<<<<<< HEAD
const ConfigPilulier2 = () => {
=======
const ConfigPilulier2 = (props) => {
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
  const [Semaine, setSemaine] = useState();
  const [Jour1,setJour1]=useState();
  const [numMois,setNumMois]=useState();
  const [Jour2,setJour2]=useState();
  const [Jour3,setJour3]=useState();
  const [Jour4,setJour4]=useState();
  const [Jour5,setJour5]=useState();
  const [Jour6,setJour6]=useState();
  const [Jour7,setJour7]=useState();
  return (
   
<SafeAreaView style={styles.container}>
<View style={styles.titleContainer}><Text style={styles.title}>Aide-Mémoire</Text></View>
<View style={{justifyContent:'space-around', flexDirection:'row' }}>
  <TouchableOpacity>
  <Ionicons name={"caret-back-outline"}
          style={{ color: colors.black }}
          size={35} />
  </TouchableOpacity>
  <View style={{width:'70%', height:30, justifyContent:'center', alignItems:'center'}}>
<Text style={{fontFamily:'Montserrat-Bold',fontSize:20}}>Semaine{Semaine}</Text>
  </View>
  <TouchableOpacity>
  <Ionicons name={"caret-forward-outline"}
          style={{ color: colors.black }}
          size={35} />
  </TouchableOpacity>
  </View>  
      
      <View style={{flexDirection:'row', flex:0.1, marginTop:20}}>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour1}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour2}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour3}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour4}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour5}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour6}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour7}.{numMois}</Text></TouchableOpacity>
</View>
<View style={{flex:0.08, alignItems:'flex-start', width:'90%'}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:18}}>Compartiments:</Text></View>
<View style={{flexDirection:'row', flex:0.15, justifyContent: 'center', alignContent:'center'}}>
     <TouchableOpacity style={{color:colors.primary,width:95,height:100,borderColor:'black',borderWidth:1,borderTopLeftRadius:50,borderBottomLeftRadius:50, alignItems:'center', justifyContent:'center'}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Matin</Text></TouchableOpacity>
     <TouchableOpacity style={{color:colors.primary,width:95,height:100,borderColor:'black',borderWidth:1, alignItems:'center', justifyContent:'center'}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Midi</Text></TouchableOpacity>
     <TouchableOpacity style={{color:colors.primary,width:96,height:100,borderColor:'black',borderWidth:1, alignItems:'center', justifyContent:'center'}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Soir</Text></TouchableOpacity>
     <TouchableOpacity style={{color:colors.primary,width:95,height:100,borderColor:'black',borderWidth:1,borderTopRightRadius:50,borderBottomRightRadius:50, alignItems:'center', justifyContent:'center'}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Nuit</Text></TouchableOpacity>
   </View>   
<<<<<<< HEAD
   <View style={{width:'80%', borderColor:'black', borderWidth:2,flex:0.3, marginTop:10}}></View>
   <TouchableOpacity style={{flex:0.11,justifyContent:'flex-end'}} > 
          <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
      <Ionicons name={"add-circle-outline"} style={{ color: 'black', fontWeight:'300' }} size={60}/></View>
      <Text style={styles.text}>Ajouter un Traitement</Text>
=======
   <View style={{width:'80%', borderColor:'black', borderWidth:2,flex:0.3, marginTop:40}}></View>
   <TouchableOpacity style={{flex:0.11,justifyContent:'flex-end' ,marginTop:40}} > 
          <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center' }}>
      <Ionicons name={"add-circle-outline"} style={{ color: 'black', fontWeight:'300' }} size={60}/></View>
      <Text style={styles.text} onPress = {() => props.navigation.navigate('Home_proche')}>Ajouter un Traitement</Text>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
          </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default ConfigPilulier2

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: colors.primary, flex:1
},
title:{
  textAlign: 'center',
  fontSize:48,
  color: colors.purple ,
  fontFamily:'Lobster',
  justifyContent:'flex-start'
},
titleContainer:{
<<<<<<< HEAD
  top:45,
=======
  top:20,
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
      alignItems: "center",
      backgroundColor: colors.primary,
      flex:0.2
},
text:{
  fontFamily:'Roboto-Bold',
  fontSize:15, textAlign:'center'
  }
})
