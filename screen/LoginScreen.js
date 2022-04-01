import { View, Text,StyleSheet,Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import Colors from '../constants/Colors';
import Fonts  from '../constants/Fonts';
import { fetchUser } from '../api/client';

const LoginScreen = props => {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');


  const [message,setMessage]=useState({
    text:'',
    color:''
  });

  // must get the id and pass it to vote page
  let data;
  

  useEffect(()=>{
    async function getUser(){
      const getUser=await fetchUser(username);
      getUser.map(user=>{

        data={
          id:user.id,
          username:user.username,
          email:user.email,
          password:user.password,
          birthdate:user.birthdate
        }
       console.log(data)
      })
    }
    getUser();
  })

  

  // const successMessage=props.navigation.getParam('successMessage');

  const fieldHandler= () =>{
    if(!username.trim() || username!=data.username){
    setMessage({text:'Please set a valid username' ,color:'red'});
  }

  else if(!password.trim() || password!=data.password){
    setMessage({text:'Please set a valid password',color:'red'});
  }
  else{
    props.navigation.navigate({routeName:'Home',params:{
      data:data
    }})
    
  }


}


  return (
    <View style={styles.container} >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login</Text>
        </View>

        {/* <Text style={{color:'green'}}>{successMessage}</Text> */}
        <Text style={{color:message.color}}>{message.text}</Text>

        <CustomInput  placeholder='Username' value={username} onChangeText={value=>setUsername(value)} />
        
        <CustomInput secureEntry={true}  placeholder='Password' value={password} onChangeText={value=>setPassword(value)} />
        
        <CustomButton btnText='Login' onPress={fieldHandler}  />
        
        {/* <Text style={styles.text}>Not a member yet? <Text style={{color:Colors.primary}} onPress={()=>{props.navigation.navigate({routeName:'Register'})}}> Sign Up</Text></Text> */}

    </View>
  )
}

LoginScreen.navigationOptions={
  headerTitle:"Page d'authentification",

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
      flex:0.3
    },
    title:{
      fontSize:35,
      fontFamily:Fonts.primary,
      color:Colors.primary,
      fontWeight:'bold'
    },
    error:{
      color:'red'
    },
    text:{
      fontFamily:Fonts.secondary,
      fontSize:18,
    }
});


export default LoginScreen