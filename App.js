
import React, { useState } from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import  AppLoading  from 'expo-app-loading';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fonts from './constants/Fonts';
import Colors from './constants/Colors';

const Stack = createNativeStackNavigator();


const fetchFonts=()=>{
  return Font.loadAsync({
      'rubik':require('./assets/Fonts/RubikMonoOne-Regular.ttf'),
      'voltaire':require('./assets/Fonts/Voltaire-Regular.ttf')
  })

  

}

export default function App() {

  const [fontLoaded,setFontLoaded]=useState(false);
  const [isLoding,setIsLoading]=useState(true);

  if(!fontLoaded){
    return(
      <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>

        <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize:30
          },
        }}
        >

           <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login' }}
          />
         
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ 
              title: 'Register',
            }}
          />

        </Stack.Navigator>
  
    </NavigationContainer>
  )
 
}


