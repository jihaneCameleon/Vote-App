import { View, Text,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { RadioButton } from 'react-native-paper';

const radioButtonsData = 
[
{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Jihane',
    value: 1
}, {
    id: '2',
    label: 'Hicham',
    value: 2
},
{
    id: '3',
    label: 'Youness',
    value: 3
},
{
    id: '4',
    label: 'Ghita',
    value: 4
}
]

const CustomRedioGroup = () => {

    const [value, setValue] = React.useState('first')


  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.radioGroupContainer}>
     
        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="First item" value="first" />
      <RadioButton.Item label="Second item" value="second" />
    </RadioButton.Group>
        
        </View>
    </View>
  )
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        width:'100%',
        padding:10,
        justifyContent:'center',
      },
    titleContainer:{
        flex:0.2
      },
      title:{
        fontSize:30,
        color:'midnightblue',
        fontWeight:'bold'
      },
      radioGroupContainer:{
        flex:0.6,

      }
});


export default CustomRedioGroup