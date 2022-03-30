import { View, Text } from 'react-native';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import RegisterScreen from '../screen/RegisterScreen';
import LoginScreen from '../screen/LoginScreen';
import HomeScreen from '../screen/HomeScreen';

import Colors from '../constants/Colors';
import Fonts  from '../constants/Fonts';


const AppNavigator = createStackNavigator({

    Login:{
        screen:LoginScreen
    },
    Register:{
        screen:RegisterScreen
    },
    Home:{
        screen:HomeScreen
    }
},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Colors.primary
          },
          headerTintColor:'white'
    }
}
)


export default createAppContainer(AppNavigator);