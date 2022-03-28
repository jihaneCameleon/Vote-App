import { View, Text, StyleSheet} from 'react-native'
import React,{useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomDatePicker from '../components/CustomDatePicker';


const RegisterScreen = () => {

  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [birthDate,setBirthDate]=useState('');
  const [password,setPassword]=useState('');


  const [message,setMessage]=useState({
    text:'',
    color:''
  });


  const fieldHandler= () =>{
    if(!username.trim()){
    setMessage({text:'Please set a valid username' ,color:'red'});
  }

  else if(!email.trim()){
    setMessage({text:'Please set a valid email',color:'red'});
  }

  else if(!birthDate.trim()){
    setMessage({text:'Please set a valid birth date',color:'red'});
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
        <Text style={styles.title}>Inscription</Text>
      </View>
      <CustomInput placeholder='Username'  value={username}  onChangeText={value=>setUsername(value)} />
      <CustomInput placeholder='Email'  value={email}  onChangeText={value=>setEmail(value)} />
      <CustomDatePicker value={birthDate}  onChangeText={value=>setBirthDate(value)} />
      <CustomInput secureEntry={true} placeholder='Password'  value={password}  onChangeText={value=>setPassword(value)} />
      <CustomButton btnText='Register' onPress={fieldHandler} />
      <Text  >{message.text}</Text>
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
    
});

export default RegisterScreen;