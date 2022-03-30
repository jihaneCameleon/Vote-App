import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomRadioGroup from '../components/CustomRadioGroup'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomRadioGroup />
    </View>
  )
}

HomeScreen.navigationOptions={
  headerTitle:"Page de Vote"
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%'
  }
});

export default HomeScreen