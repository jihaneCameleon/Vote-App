import { View,Button,StyleSheet, } from 'react-native'
import React from 'react'

const CustomButton = props => {
  return (
    <View style={styles.buttonContainer}>
      <Button  title={props.btnText} color='dodgerblue' />
    </View>
  )
}
const styles = StyleSheet.create({
    buttonContainer:{
        width:'90%',
        borderRadius:5,
        marginVertical:10,
    }
    
});

export default CustomButton