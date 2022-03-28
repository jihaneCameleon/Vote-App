import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const LoginScreen = () => {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');


  const [message,setMessage]=useState({
    text:'',
    color:''
  });


  const fieldHandler= () =>{
    if(!username.trim()){
    setMessage({text:'Please set a valid username' ,color:'red'});
  }

  else if(!password.trim()){
    setMessage({text:'Please set a valid password',color:'red'});
  }
  else{
    setMessage({text:'you are logged in',color:'green'})
  }

}


  return (
    <View style={styles.container} >
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Login</Text>
    </View>
    <CustomInput  placeholder='Username' value={username} onChangeText={value=>setUsername(value)} />
    
    <CustomInput secureEntry={true}  placeholder='Password' value={password} onChangeText={value=>setPassword(value)} />
    
    <CustomButton btnText='Login' onPress={fieldHandler} />
    <Text style={{color:message.color}}>{message.text}</Text>
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