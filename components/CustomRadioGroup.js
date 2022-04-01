
import { View, Text,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { RadioButton } from 'react-native-paper';
import { CheckBox,Input, } from 'react-native-elements';
import CustomButton from '../components/CustomButton';
import { color } from 'react-native-elements/dist/helpers';
import { updateUser } from '../api/client';


const CustomRadioGroup = props => {


  
    const [value, setValue] = useState('');
    const [message,setMessage] = useState('');
    const [color,setColor] = useState('');

   

    const data = props.data;
    data.result=value;
    const id =data.id;

    

    const formHandler= () =>{
      if(value===''){
        setMessage('vous devez choisir au moins un candidat!')
        setColor('red');
      }
      else{
        updateUser(id,data);
        setMessage('Votre choix a éte envoyé')
        setColor('green')
      }
    }
    

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Page de Vote</Text>
        </View>
        <View style={styles.radioGroupContainer}>
     
        <RadioButton.Group onValueChange={value => setValue(value)} 
        value={value}>

            <RadioButton.Item label="Jihane" value="jihane" />
            <RadioButton.Item label="Hicham" value="hicham" />
            <RadioButton.Item label="Youness" value="youness" />
            <RadioButton.Item label="Ghita" value="ghita" />
            
        </RadioButton.Group>
        
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton btnText='Voter' onPress={formHandler} />
        </View>
        <Text style={{color:color}} >{message}</Text>

    </View>
  )
}
const styles = StyleSheet.create({

    container:{
        flex:1,

        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        width:'100%'
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
        flex:0.4,
        
      },
      buttonContainer:{
        flex:0.1,
        width:'80%',
        alignItems:'center'
      },

});


export default CustomRadioGroup