import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const LoginScreen = () => {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const[usernameIsValid,setUsernameIsValid]=useState(false);
  const[passwordIsValid,setPasswordIsValid]=useState(false);


  const usernameHandler= text =>{
    if(text.length===0){
      setUsernameIsValid(false)
  }
  else{
    setUsernameIsValid(true)
  }
  setUsername(text)

}


const passwordHandler= text =>{
  if(text.length===0){
    setPasswordIsValid(false)
}
else{
  setPasswordIsValid(true)
}
setPassword(text)
}

  return (
    <View style={styles.container} >
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Login</Text>
    </View>
    <CustomInput  placeholder='Username' value={username} onChangeText={usernameHandler} />
    {!usernameIsValid && <Text style={styles.error} >Please set a valid title</Text>}
    <CustomInput secureEntry={true}  placeholder='Password' value={password} onChangeText={passwordHandler} />
    {!passwordIsValid && <Text style={styles.error} >Please set a valid password</Text>}
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
    },
    error:{
      color:'red'
    }
});


export default LoginScreen