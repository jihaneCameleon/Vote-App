import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomRadioGroup from '../components/CustomRadioGroup'
import { useNavigation,useRoute} from '@react-navigation/native';


const HomeScreen = props => {

  const navigation = useNavigation();
  const route=useRoute();

  const {data}=route.params;

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