import { StyleSheet, Text, View,Image,StatusBar , TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../../config/colors'


const WelcomeScreen = (props) => {

  return (
   
       <View style={styles.container}>
       
      <Image style={{margin:10 ,width:'67.5%',height:'37.5%' ,justifyContent:'center',alignItems:'center'} }
      source={require('../../assets/logo.png')} />
      <View ><Text style={styles.textStyle}>Aide-Mémoire</Text></View> 
    <TouchableOpacity style={{margin:20 ,left:5,top:50 ,width:'50%', height:'7%', backgroundColor:colors.yesGreen, borderRadius:15, marginTop:30, alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'white'}} onPress = {() => props.navigation.navigate('Role')}>
           <Text  style={{fontSize: 15,fontFamily:'Montserrat-Bold',fontWeight: 'bold',color:colors.white}}>COMMENCER</Text>
                    </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderWidth: 0.5,
        justifyContent:'center',
        alignItems:'center',
        top:0,
        flex:1
      
        
      } ,
      button: {
        elevation: 8,
        backgroundColor: colors.purplelight,
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 12 ,
        flexDirection:'row',
        fontFamily:'Montserrat',
        fontWeight: 'bold',
        flexDirection:'row',
        width:200,
        height:50,
        alignItems:'flex-end',
        justifyContent:'center' ,
        top:150
        
      },
      textStyle:{
        textAlign: 'center',
        fontSize:48,
        color: colors.purple ,
        fontFamily:'lobster',
        margin:10,
        justifyContent:'flex-start',}
      
})