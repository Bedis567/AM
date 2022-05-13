import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import colors from '../../config/colors'
import { useEffect,useState } from 'react'

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
    <View style={styles.back}>
      <View style={{marginVertical:30 , alignItems:'center'}}>
      <Text style={styles.text}>Aide-Mémoire</Text>
      </View>
      <View style={{marginVertical:30 , alignItems:'center'}}>
      <Text style={styles.text2}>Votre code QR est :</Text>
      </View>
      <View style={{alignItems:'center' , justifyContent:'center' , }} >
      <QRCode
      value={qrValue ?qrValue :'code malade'}
      size={250}
      color='white'
      backgroundColor='black'
     ></QRCode>
      <Text style={styles.text3}>Scannez-le avec le téléphone du malade ou connectez-vous manuellement en utilisant votre code unique :</Text>
       
      <Text style={styles.text4} on changeText={(text)=>(setInput(props.text)) } onPress = {() => props.navigation.navigate('Connection')}  >{randomArray}</Text>
     
    </View></View>
  )
}
const styles = StyleSheet.create({
 text: {
    fontSize: 40,
    
    fontWeight: 'bold',
    letterSpacing: 0.25,
    fontFamily:'Lobster',
    color: colors.purple ,
    alignItems : 'center' ,
      justifyContent: 'flex-start',
     
    
  },
  text3: {
    fontSize: 15
    ,marginVertical:15,
    letterSpacing: 0.25,
    fontFamily:'Montserrat',
    color: colors.black ,
    alignItems : 'center' ,
    justifyContent: 'center',
    textAlign:'center' ,  },
  text2: {
    fontSize: 25,
    letterSpacing: 0.25,
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
    height:'100%',
    width:'100%' ,
  }
});

export default CodeMalade
