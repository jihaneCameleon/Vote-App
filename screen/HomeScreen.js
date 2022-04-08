import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomRadioGroup from '../components/CustomRadioGroup'

const HomeScreen = props => {

  const data=props.navigation.getParam('data');

  return (
    <View style={styles.container}>
      <CustomRadioGroup data={data} />
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