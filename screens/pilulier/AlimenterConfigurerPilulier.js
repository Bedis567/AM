import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity , ScrollView} from 'react-native'
import React ,{ useState }from 'react'
import colors from '../../config/colors'
import Ionicons from "@expo/vector-icons/Ionicons"

const AlimenterConfigurerPilulier = (props) => {
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
<View style={styles.titleContainer}><Text style={styles.title}>Traitement et Pilulier</Text></View>

<View style={{justifyContent:'space-around', flexDirection:'row',flex:0.1 }}>
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
      
      <View style={{flexDirection:'row', flex:0.1, marginTop:10}}>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour1}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour2}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour3}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour4}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour5}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour6}.{numMois}</Text></TouchableOpacity>
  <TouchableOpacity style={{borderWidth:1.5,width:45,height:45,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50, borderBottomRightRadius:50, margin:5, justifyContent:'center', alignItems:'center'}}><Text style={{fontFamily:'Roboto'}}>{Jour7}.{numMois}</Text></TouchableOpacity>
</View> 
<View style={{flex:0.05}}></View>
<View style={{flex:0.08, alignItems:'flex-start', width:'90%'}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:18}}>Compartiments:</Text></View>
<View style={{flex:0.05}}></View>
<View style={{flexDirection:'row', flex:0.15, justifyContent: 'center', alignContent:'center'}}>
     <TouchableOpacity style={{color:colors.primary,width:95,height:100,borderColor:'black',borderWidth:1,borderTopLeftRadius:50,borderBottomLeftRadius:50, alignItems:'center', justifyContent:'center'}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Matin</Text></TouchableOpacity>
     <TouchableOpacity style={{color:colors.primary,width:95,height:100,borderColor:'black',borderWidth:1, alignItems:'center', justifyContent:'center'}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Midi</Text></TouchableOpacity>
     <TouchableOpacity style={{color:colors.primary,width:96,height:100,borderColor:'black',borderWidth:1, alignItems:'center', justifyContent:'center'}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Soir</Text></TouchableOpacity>
     <TouchableOpacity style={{color:colors.primary,width:95,height:100,borderColor:'black',borderWidth:1,borderTopRightRadius:50,borderBottomRightRadius:50, alignItems:'center', justifyContent:'center'}}><Text style={{fontFamily:'Montserrat-Bold', fontSize:20}}>Nuit</Text></TouchableOpacity>
   </View>   
   <View style={{flex:0.1}}></View>
   <View style={{width:'80%', borderColor:'black', borderWidth:2,flex:0.3, marginTop:30}}></View>
   <View style={{flex:0.05}}></View>
   <View style={{alignItems:'center', justifyContent:'flex-start', flexDirection:'row',marginTop:10}}>
      <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:100, marginRight:30}} > 
      <Ionicons name={"add-circle-outline"} style={{ color: 'black', fontWeight:'300' }} size={60}/>
      <Text style={styles.text}>Ajouter un Traitement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:150,height:70, backgroundColor:colors.yesGreen, borderRadius:50, justifyContent:'center', alignItems:'center',  marginLeft:30}}><Text style={{fontFamily:'Roboto-Bold', color:'white', fontSize:20, textAlign:'center'}}
           onPress = {() => props.navigation.navigate('Home_proche')}>Alimenter Pilulier</Text></TouchableOpacity>
          </View> 
   
    </SafeAreaView>
  );
};

export default AlimenterConfigurerPilulier

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: colors.primary, flex:1
},
title:{
    textAlign: 'center',
    fontSize:40,
    color: 'black' ,
    fontFamily:'Lobster',
    justifyContent:'flex-start'
},
titleContainer:{
        top:20,
        alignItems: "center",
        backgroundColor: colors.primary,
        flex:0.2
},
text:{
    fontFamily:'Roboto-Bold',
    fontSize:15, textAlign:'center'
    }
})
