import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import DatePicker from 'react-native-datepicker';


const CustomDatePicker = () => {

  const [date, setDate] = useState('');

  return (
    <View style={styles.datePickercontainer} >
    <DatePicker
       style={styles.datePickerStyle}
       date={date}
       mode="date"
       placeholder="select date"
       format="DD/MM/YYYY"
       minDate="01-01-1900"
       maxDate={new Date()}
       confirmBtnText="Confirm"
       cancelBtnText="Cancel"
       showIcon={false}
       customStyles={{
         dateInput: {
           borderWidth:0,
         },
         placeholderText: {
           fontSize: 18,
           color:'#a1a5a9',
         },
         dateText: {
           fontSize:18,
         },
    
       }}
       onDateChange={(date) => {
         setDate(date);
       }}
     />
  </View>
  )
}

const styles = StyleSheet.create({
    datePickercontainer:{
        backgroundColor:'white',
        width:'90%',
        borderColor:'lightblue',
        borderWidth:1,
        borderRadius:5,
        paddingVertical:5,
        marginVertical:10,
      }
});

export default CustomDatePicker