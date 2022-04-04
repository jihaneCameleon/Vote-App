import { View, Text,Button } from 'react-native'
import React,{useState,useReducer,createContext} from 'react'
import FunctionContext from './FunctionContext';

export const ColorContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
    }
}

const TestScreen = () => {
    const [state,dispatch]=useReducer(reducer,{count:0})
    const [color,setColor] = useState('pink');
    function increment(){
        dispatch({type:'increment'})
    }

    function decrement(){
        dispatch({type:'decrement'})
    }
    function changeColor(){
        setColor('red')
    }
  
  return (
    <ColorContext.Provider value={color}>
        <View>
            <Button title='increment' onPress={increment} />
           <Text>{state.count}</Text>
           <Button title='decrement' onPress={decrement}  />
           <Button title='color button' onPress={changeColor} />
        </View>
        <FunctionContext/>
    </ColorContext.Provider>
  )
}

//medium.com/swlh/react-native-authentication-with-context-api-global-state-management-db8d3bf4e3f9

//levelup.gitconnected.com/react-native-authentication-flow-the-simplest-and-most-efficient-way-3aa13e80af61

//soshace.com/react-user-login-authentication-using-usecontext-and-usereducer/

//www.bigbinary.com/learn-react-native/handling-authentication-state-in-react-native

export default TestScreen;