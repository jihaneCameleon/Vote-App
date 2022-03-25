
import { View, Text,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { RadioButton } from 'react-native-paper';
import { CheckBox,Input, } from 'react-native-elements';
import CustomButton from '../components/CustomButton';
import { color } from 'react-native-elements/dist/helpers';



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

const CustomRadioGroup = () => {


  
    const [value, setValue] = useState('');
    const [message,setMessage] = useState('');
    const [color,setColor] = useState('');

    const formHandler=()=>{
      if(value===''){
        setMessage('vous devez choisir au moins un candidat!')
        setColor('red');
      }
      else{
        setMessage('Votre choix a éte envoyé')
        setColor('green')
      }
    }
    
    // const [male,setMale]= useState(false);
    // const [female,setFemale]= useState(false);
    // const [other,setOther]= useState(false);

    // const genderMale=()=>{
    //   setMale(true);
    //   setFemale(false);
    //   setOther(false);
    // }

    // const genderFemale=()=>{
    //   setFemale(true);
    //   setMale(false);
    //   setOther(false);
    // }

    // const genderOther=()=>{
    //   setOther(true);
    //   setMale(false);
    //   setFemale(false);
    // }

    

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Page de Vote</Text>
        </View>
        <View style={styles.radioGroupContainer}>
        
          {/* <CheckBox title="Male" center checked={male} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={genderMale}  />

          <CheckBox title="Female" center checked={female} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={genderFemale}  />

          <CheckBox title="Other" center checked={other} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={genderOther}  /> */}
         
     
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