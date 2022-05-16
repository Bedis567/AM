import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image ,SafeAreaView} from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import Button from '../../components/Button'
import Input from '../../components/input'
import Display from '../../components/Display'
import {Picker} from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Ionicons from "@expo/vector-icons/Ionicons";

  
const Register_proche = (props) => {
    const [selectedDay, setSelectedDay] = useState();
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedYear, setSelectedYear] = useState();
  return (
    <SafeAreaView  style={{ alignItems:'center', flex:1}}>
    <View style={{height:'100%', width:'100%',flexDirection:'column', flex:1}}>
    <View style={{width: "100%",
       height: "45%",
       alignItems: "center",
       backgroundColor: colors.primary,
       borderBottomColor:'black', borderBottomWidth:0.7}}>
     <Image style={{width:"45%",height:"52%", top:30 , resizeMode:'stretch'}} 
     source={require('../../assets/logo.png')} />
      <Text style={{fontFamily:"Lobster", margin:5, fontSize:30, top:40 , color:colors.purple}}>Aide-Mémoire</Text>
     <Text style={{fontFamily:"Lobster", margin:5, fontSize:15, top:40}}>Vos biens aimés, en pleine sécurité </Text>
    
     <View style={{width:'100%', height:30, flexDirection:'row', top:50, justifyContent:'space-around'}}>
         <TouchableOpacity style={{alignItems:'center'}}>
         <Text style={{fontFamily:'Montserrat-Bold',fontSize:17 , color:colors.purple}}>S'inscrire</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{alignItems:'center'}}>
             <Text style={{fontFamily:'Montserrat-Bold', fontSize:17}} onPress = {() => props.navigation.navigate('Login_proche')}>Se connecter</Text> 
         </TouchableOpacity>
         </View>
         </View>
         <View style={{justifyContent:'flex-start', alignItems:'center', width:'100%', height:'60%', top: 30}}>
         <ScrollView style={{flex:0.65}} contentContainerStyle={{alignItems:'center'}}  > 
             <Text style={{fontFamily:'Roboto', fontSize:20, color:'black'}}>Veuillez entrer vos informations:</Text>
    
     <Input icon="md-person" placeholder="Nom Complet" />
          <Input icon="md-mail" placeholder="Email" />
          <Input icon="lock-closed-outline" placeholder="Mot de passe"/>
          <Input icon="lock-closed" placeholder="Confirmer le mot de passe" />
          <Display icon="md-location" label="localisation"/>
          
         <View><Text style={styles.textStyle3}>Date de naissance</Text><View style={{backgroundColor:"#ddd", borderRadius:12, marginVertical:14}}>
           
           <Picker 
  selectedValue={selectedDay}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedDay(itemValue)}
    itemStyle={{ backgroundColor: "Black", color: "blue", fontFamily:"Montserrat", fontSize:17 }} >
  <Picker.Item label="1" value="1" />
  <Picker.Item label="2" value="2" />
  <Picker.Item label="3" value="3" />
  <Picker.Item label="4" value="4" />
  <Picker.Item label="5" value="5" />
  <Picker.Item label="6" value="6" />
  <Picker.Item label="7" value="7" />
  <Picker.Item label="8" value="8" />
  <Picker.Item label="9" value="9" />
  <Picker.Item label="10" value="10"/>
  <Picker.Item label="11" value="11" />
  <Picker.Item label="12" value="12" />
  <Picker.Item label="13" value="13" />
  <Picker.Item label="14" value="14" />
  <Picker.Item label="15" value="15" />
  <Picker.Item label="16" value="16" />
  <Picker.Item label="17" value="17" />
  <Picker.Item label="18" value="18" />
  <Picker.Item label="19" value="19" />
  <Picker.Item label="20" value="20"/>
  <Picker.Item label="21" value="21" />
  <Picker.Item label="22" value="22" />
  <Picker.Item label="23" value="23" />
  <Picker.Item label="24" value="24" />
  <Picker.Item label="25" value="25" />
  <Picker.Item label="26" value="26" />
  <Picker.Item label="27" value="27" />
  <Picker.Item label="28" value="28" />
  <Picker.Item label="29" value="29" />
  <Picker.Item label="30" value="30"/>
  <Picker.Item label="31" value="31"/>


</Picker>

<Picker 
style={{padding:10}}
  selectedValue={selectedMonth}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedMonth(itemValue)}
    itemStyle={{ backgroundColor: "Black", color: "blue", fontFamily:"Montserrat", fontSize:17 }} >
  <Picker.Item label="Janvier" value="1" />
  <Picker.Item label="Février" value="2" />
  <Picker.Item label="Mars" value="3" />
  <Picker.Item label="Avril" value="4" />
  <Picker.Item label="Mai" value="5" />
  <Picker.Item label="Juin" value="6" />
  <Picker.Item label="Juillet" value="7" />
  <Picker.Item label="Août" value="8" />
  <Picker.Item label="Septembre" value="9" />
  <Picker.Item label="Octobre" value="10"/>
  <Picker.Item label="Novembre" value="11" />
  <Picker.Item label="décembre" value="12" />
  

</Picker>
<Picker
  selectedValue={selectedYear}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedYear(itemValue)}
    itemStyle={{ backgroundColor: "Black", color: "blue", fontFamily:"Montserrat", fontSize:17 }} >
  <Picker.Item label="1940" value="1940"/>
  <Picker.Item label="1941" value="1941"/>
  <Picker.Item label="1942" value="1942"/>
  <Picker.Item label="1943" value="1943"/>
  <Picker.Item label="1944" value="1944"/>
  <Picker.Item label="1945" value="1945"/>
  <Picker.Item label="1946" value="1946"/>
  <Picker.Item label="1947" value="1947"/>
  <Picker.Item label="1948" value="1948"/>
  <Picker.Item label="1949" value="1949"/>
  <Picker.Item label="1950" value="1950"/>
  <Picker.Item label="1951" value="1951"/>

  <Picker.Item label="1952" value="1952"/>
  <Picker.Item label="1953" value="1953"/>
  <Picker.Item label="1954" value="1954"/>
  <Picker.Item label="1955" value="1955"/>
  <Picker.Item label="1956" value="1956"/>
  <Picker.Item label="1957" value="1957"/>
  <Picker.Item label="1958" value="1958"/>
  <Picker.Item label="1959" value="1959"/>
  <Picker.Item label="1960" value="1960"/>
  <Picker.Item label="1961" value="1961"/>
  <Picker.Item label="1962" value="1962"/>
  <Picker.Item label="1963" value="1963"/>
  <Picker.Item label="1964" value="1964"/>
  <Picker.Item label="1965" value="1965"/>
  <Picker.Item label="1966" value="1966"/>
  <Picker.Item label="1967" value="1967"/>
  <Picker.Item label="1968" value="1968"/>
  <Picker.Item label="1969" value="1969"/>

  <Picker.Item label="1970" value="1970"/>
  <Picker.Item label="1971" value="1971"/>
  <Picker.Item label="1972" value="1972"/>
  <Picker.Item label="1973" value="1973"/>
  <Picker.Item label="1974" value="1974"/>
  <Picker.Item label="1975" value="1975"/>
  <Picker.Item label="1976" value="1976"/>
  <Picker.Item label="1977" value="1977"/>
  <Picker.Item label="1978" value="1978"/>
  <Picker.Item label="1979" value="1979"/>

  <Picker.Item label="1980" value="1980"/>
  <Picker.Item label="1981" value="1981"/>
  <Picker.Item label="1982" value="1982"/>
  <Picker.Item label="1983" value="1983"/>
  <Picker.Item label="1984" value="1984"/>
  <Picker.Item label="1985" value="1985"/>
  <Picker.Item label="1986" value="1986"/>
  <Picker.Item label="1987" value="1987"/>
  <Picker.Item label="1988" value="1988"/>
  <Picker.Item label="1989" value="1989"/>

  <Picker.Item label="1990" value="1990"/>
  <Picker.Item label="1991" value="1991"/>
  <Picker.Item label="1992" value="1992"/>
  <Picker.Item label="1993" value="1993"/>
  <Picker.Item label="1994" value="1994"/>
  <Picker.Item label="1995" value="1995"/>
  <Picker.Item label="1996" value="1996"/>
  <Picker.Item label="1997" value="1997"/>
  <Picker.Item label="1998" value="1998"/>
  <Picker.Item label="1999" value="1999"/>

  <Picker.Item label="2000" value="2000"/>
  <Picker.Item label="2001" value="2001"/>
  <Picker.Item label="2002" value="2002"/>
  <Picker.Item label="2003" value="2003"/>
  <Picker.Item label="2004" value="2004"/>

</Picker>

</View>
       <Text style={styles.textStyle3}>Attachez une photo du Patient </Text>
          <View style={{alignItems:'center', marginVertical:30}}><TouchableOpacity style={{width:200,height:200, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
              <Ionicons
          name="add-outline"
          style={{color:colors.grey}}
          size={150}
        /> 
        </TouchableOpacity></View>
        <View style={{bottom:20}}>
        <BouncyCheckbox
  size={15}
  fillColor='#8E0798'
  unfillColor="#f7f2e2"
  text="J'accepte les termes et les conditions d'utilisation"
  iconStyle={{ borderColor: colors.purple  }}
  textStyle={{ fontFamily: "Roboto", textDecorationLine: "none", fontSize:15  }}
  onPress={(isChecked) => {}}
  style={{}}
  
/>

        </View>
        </View> 
        <TouchableOpacity style={{bottom:20, width:200, height:50, backgroundColor:colors.yesGreen, borderRadius:15, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white' ,marginTop:20}} 
        onPress = {() => props.navigation.navigate('Scan_code')}>
          <Text style={{color:'white', fontFamily:'Roboto-Bold', fontSize:20}}>Confirmer</Text></TouchableOpacity>
      <View style={{ width:100 , height:50}}><Text></Text></View>
         
   </ScrollView>
   
  </View></View>
  </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    flex:1
    
  },
  input:{
    borderWidth: 3,
    width:300,
    height:40,
    padding:10,
    borderColor:"black"
  },
inputContainer:{
  
alignItems:'center',
top:60

},

textStyle:{
  fontSize: 40,
  
  fontWeight: 'bold',
  letterSpacing: 0.25,
  fontFamily:'Lobster',
  color: colors.purple ,
  alignItems : 'center' ,
    justifyContent: 'flex-start',
   


},
textStyle2:{
  fontSize:25,
  letterSpacing: 0.25,
  fontFamily:'Montserrat',
  color: colors.black ,
  alignItems : 'center' ,
  justifyContent: 'center' ,
  textAlign:'center'
},
textStyle3:{
  textAlign:'center',
  fontSize:20,
  color: colors.black,
  fontFamily:'Montserrat'
  
},

container1: {
  flex: 1,
  paddingTop: 40,
  alignItems: "center"
},
container2: {
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ddd",
  width: 8 / 1.2,
  borderRadius: 15,
  marginVertical: 10,
},
Container3: {
    alignItems:'center'
}
})
  export default Register_proche