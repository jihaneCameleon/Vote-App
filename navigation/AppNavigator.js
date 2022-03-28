import { View, Text } from 'react-native';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import RegisterScreen from '../screen/RegisterScreen';
import LoginScreen from '../screen/LoginScreen';
import HomeScreen from '../screen/HomeScreen';

const AppNavigator = createStackNavigator({

    Register:{
        screen:RegisterScreen
    },
    Login:{
        screen:LoginScreen
    },
    Home:{
        screen:HomeScreen
    }
})


export default createAppContainer(AppNavigator);