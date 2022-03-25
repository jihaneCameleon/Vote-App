import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const LoginScreen = () => {
  return (
    <View style={styles.container} >
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Login</Text>
    </View>
    <CustomInput placeholder='Username' />
    <CustomInput placeholder='Password' />
    <CustomButton btnText='Login' />
  </View>
  )
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      width:'100%',
      padding:10,
      justifyContent:'center',
      alignItems:'center',
    },
    titleContainer:{
      flex:0.2
    },
    title:{
      fontSize:30,
      color:'midnightblue',
      fontWeight:'bold'
    }
});


export default LoginScreen