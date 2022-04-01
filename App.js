
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import  AppLoading  from 'expo-app-loading';
import LoginScreen from './screen/LoginScreen';

const fetchFonts=()=>{
  return Font.loadAsync({
      'rubik':require('./assets/Fonts/RubikMonoOne-Regular.ttf'),
      'voltaire':require('./assets/Fonts/Voltaire-Regular.ttf')
  })

  

}

export default function App() {

  const [fontLoaded,setFontLoaded]=useState(false);
  console.log('fetch')
  if(!fontLoaded){
    return(
      <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={(err) => console.log(err)}
      />
    );
  }
  console.log('end fetch')

  return <LoginScreen/>
 
}


