import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = props=> {
  return (
    <View style={styles.container}>
      <TextInput type placeholder={props.placeholder} style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'90%',
        borderColor:'lightblue',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:10,
        
    },
    input:{
        fontSize:18
    }
});

export default CustomInput