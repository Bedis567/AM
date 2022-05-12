import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView ,TextInput,ScrollView} from 'react-native'
import React,{useState} from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import colors from '../../config/colors'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native'



const ConfigRappelsUtiles = (props) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text1, setText1] = useState("Selectionner l'heure");
    const [text2, setText2] = useState("Selectionner la date");
  
  
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
  setShow(Platform.OS==='ios');
  setShow(false);
    setDate(currentDate);
  
  let tempDate = new Date(currentDate);
   let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
let fDate = tempDate.getDate() +'/'+(tempDate.getMonth() +1)+'/'+tempDate.getFullYear();
  console.log(fTime,fDate)
 if (mode=='time'){ setText1(fTime)};

  if (mode=='date'){setText2(fDate)};
    };
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      setShow(true);
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
      
  
    };
  return (
    <SafeAreaView  style={{backgroundColor:colors.primary, alignItems:'center', flex:1}}>
    <View style={styles.container}>
      <View style={{top:0}}><Text style={styles.title}>Rappels Utiles</Text></View>

      <ScrollView  style={{backgroundColor:'red', width:'100%'}} contentContainerStyle={{alignItems:'center'}} > 
      <Text style={{fontFamily:"Montserrat-Bold", top:35, fontSize:30, textAlign:'center'}}>Ajouter un nouveau Rappel</Text>
      
      <View style={{alignItems:'center', top:70}}>
    <View style={{backgroundColor:colors.lightGrey,width:350, height:75, justifyContent:'center', alignItems:'stretch', justifyContent:'center',borderColor:'black', borderWidth:1, borderRadius:30 }}>
        <TextInput placeholder='Nom du Rappel' style={{fontFamily:'Montserrat-Bold', fontSize:25, margin:10 }}/>
    </View>
      <View style={{width:'90%', height:'30%', alignItems:'center', justifyContent:'center' , top:30}}>
      <TouchableOpacity style={{  backgroundColor:colors.lightGrey , margin:5, borderColor:'black', width:350, height:75,borderRadius:50, borderWidth:1, justifyContent:"center", alignItems:'center' }} onPress={()=>showDatepicker()}>
      <Text style={{fontFamily:'Montserrat-Bold', fontSize:25, margin:10,}}>{text2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor:colors.lightGrey, margin:5, borderColor:'black',width:350, height:75, borderRadius:50, borderWidth:1, height:60, justifyContent:"center", alignItems:'center' , top:15}} onPress={()=>showTimepicker()}>
              <Text style={{fontFamily:'Montserrat-Bold', fontSize:25, margin:10}}>{text1}</Text>
          </TouchableOpacity>
          { show &&  <DateTimePicker mode={mode} value={new Date()}  onChange={onChange} /> }
          </View>
          <View style={{width:'70%', alignItems:'flex-start'}}>
              <Text style={{fontFamily:'Roboto', fontSize:25 , top:50}}>Répétition:</Text>
      <BouncyCheckbox
  size={30}
  fillColor='#8E0798'
  unfillColor="#f7f2e2"
  text="Une seule fois"
  iconStyle={{ borderColor: colors.purple }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:25  }}
  onPress={(isChecked) => {}}
  style={{margin:10 , top:50}}
/>
<BouncyCheckbox
  size={30}
  fillColor='#8E0798'
  unfillColor="#f7f2e2"
  text="Chaque jour"
  iconStyle={{ borderColor: colors.purple }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:25  }}
  onPress={(isChecked) => {}}
  style={{margin:10 , top:50}}
/>
<BouncyCheckbox
  size={30}
  fillColor='#8E0798'
  unfillColor="#f7f2e2"
  text="Chaque semaine"
  iconStyle={{ borderColor: colors.purple }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:25  }}
  onPress={(isChecked) => {}}
  style={{margin:10 ,top:50}}
/>
<BouncyCheckbox
  size={30}
  fillColor='#8E0798'
  unfillColor="#f7f2e2"
  text="Chaque mois"
  iconStyle={{ borderColor: colors.purple }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:25 }}
  onPress={(isChecked) => {}}
  style={{margin:10 ,top:50}}
/>
</View>

<TouchableOpacity style={{backgroundColor:colors.yesGreen, borderRadius:50, width:150, height: 50, justifyContent:'center', alignItems:'center' , top:90}}>
  <Text style={{fontFamily:'Roboto-Bold', fontSize:25, color:'white'}} onPress = {() => props.navigation.navigate('Home_proche')} >
    Ajouter</Text>
  </TouchableOpacity>

</View>

</ScrollView></View>
    
    </SafeAreaView>
  )
}

export default ConfigRappelsUtiles

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      backgroundColor: colors.primary, flex:1,
      justifyContent:"center",
      top:10},
  title:{
    alignItems:'flex-start',
    fontFamily:'Lobster',
    fontSize:48,
    color:colors.black,
alignItems:'center',
justifyContent:'center',
 },
 
  })