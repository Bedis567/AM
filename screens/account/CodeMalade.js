<<<<<<< HEAD
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import colors from '../../config/colors'
import { useEffect,useState } from 'react'
=======
import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView} from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import colors from '../../config/colors'
import { useEffect,useState } from 'react'
import { adaptToHeight,adaptToWidth } from '../../config/Demensions'
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e

const CodeMalade = (props) => {
  const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from(
    { length: 8 },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  );
 


  const randomString = randomArray.join("");
  const [input, setInput]=useState('') ;
  const [qrValue,setQrValue]=useState('') ;


  return (
<<<<<<< HEAD
    <View style={styles.back}>
      <View style={{marginVertical:30 , alignItems:'center'}}>
      <Text style={styles.text}>Aide-Mémoire</Text>
      </View>
      <View style={{marginVertical:30 , alignItems:'center'}}>
=======
    <SafeAreaView style={styles.back}>
      <View style={{marginVertical: adaptToHeight(0.05), alignItems:'center', flex:0.2}}>
      <Text style={styles.text}>Aide-Mémoire</Text>
      </View>
      <View style={{marginVertical:adaptToHeight(0.05) , alignItems:'center'}}>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
      <Text style={styles.text2}>Votre code QR est :</Text>
      </View>
      <View style={{alignItems:'center' , justifyContent:'center' , }} >
      <QRCode
      value={qrValue ?qrValue :'code malade'}
<<<<<<< HEAD
      size={250}
=======
      size={adaptToHeight(0.3)}
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
      color='white'
      backgroundColor='black'
     ></QRCode>
      <Text style={styles.text3}>Scannez-le avec le téléphone du malade ou connectez-vous manuellement en utilisant votre code unique :</Text>
       
      <Text style={styles.text4} on changeText={(text)=>(setInput(props.text)) } onPress = {() => props.navigation.navigate('Connection')}  >{randomArray}</Text>
     
<<<<<<< HEAD
    </View></View>
=======
    </View></SafeAreaView>
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
  )
}
const styles = StyleSheet.create({
 text: {
<<<<<<< HEAD
    fontSize: 40,
    
    fontWeight: 'bold',
    letterSpacing: 0.25,
    fontFamily:'lobster',
=======
    fontSize: 48,
    
    letterSpacing:adaptToWidth(0.001),
    fontFamily:'Lobster',
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
    color: colors.purple ,
    alignItems : 'center' ,
      justifyContent: 'flex-start',
     
    
  },
  text3: {
    fontSize: 15
<<<<<<< HEAD
    ,marginVertical:15,
    letterSpacing: 0.25,
=======
    ,marginVertical:adaptToHeight(0.025) ,
    letterSpacing: adaptToWidth(0.001),
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
    fontFamily:'Montserrat',
    color: colors.black ,
    alignItems : 'center' ,
    justifyContent: 'center',
    textAlign:'center' ,  },
  text2: {
    fontSize: 25,
<<<<<<< HEAD
    letterSpacing: 0.25,
=======
    letterSpacing: adaptToWidth(0.001),
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
    fontFamily:'Montserrat',
    color: colors.black ,
    alignItems : 'center' ,
    justifyContent: 'center'
 } ,
 text4: {
    
  fontWeight: 'bold',
  color:'red' ,
  fontSize: 20,
},
  back:{
    backgroundColor: colors.primary ,
<<<<<<< HEAD
    height:'100%',
    width:'100%' ,
=======
   flex:1
>>>>>>> ccee34fc7c5dd6dd902d425f23221ec8acee645e
  }
});

export default CodeMalade
