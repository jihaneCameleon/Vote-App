
import React, { useState ,useMemo,useEffect} from 'react';
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
import Loading from './components/Loading';
import HomeScreen from './screen/HomeScreen'
import { AuthProvider } from './AuthContext'; 


const Stack = createNativeStackNavigator();


const fetchFonts=()=>{
  return Font.loadAsync({
      'rubik':require('./assets/Fonts/RubikMonoOne-Regular.ttf'),
      'voltaire':require('./assets/Fonts/Voltaire-Regular.ttf')
  })

  

}

export default function App() {

  const [fontLoaded,setFontLoaded]=useState(false);
  const [isLoding,setIsLoading]=useState(false);
  const [userToken,setUserToken]=useState(null);

  if(!fontLoaded){
    return(
      <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={(err) => console.log(err)}
      />
    );
  }


  if(isLoding){
    return(
        <Loading/>
    )
  }

  return (
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: Colors.primary },
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize:30
              },
              headerShown: false
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
        
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: 'Home',
                }}
              />
            </Stack.Navigator>
        
        
        </NavigationContainer>
      </AuthProvider>
  )
 
}
const styles = StyleSheet.create({

});


