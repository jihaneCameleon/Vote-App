import { View, Text,Button } from 'react-native'
import React,{useContext} from 'react'
import { ColorContext } from './TestScreen'

const FunctionContext = () => {
    const color=useContext(ColorContext)
    
  return (
    <View>
     <Button title='increment 2' color={color} />
    </View>
  )
}

export default FunctionContext