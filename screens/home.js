import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import {useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,username } from '../redux/actions/countaction';
 
export default function Home() {
  const dispatch = useDispatch();
  const textVal = useRef();
  const count = useSelector((store) => store.count.count);
  const usr = useSelector((store) => store.usr.usr);
  const [use,setUse] = useState('');


  const handleIncrement = () => {
    dispatch(increment());
  };
 
  const handleDecrement = () => {
    dispatch(decrement());
  };



 const handleusername = () =>{
  
 const value = use;
   dispatch(username(value))
  console.log(value)
 }

  console.log(usr)
  return (
   
    <View style={styles.container}>
    
    
 
      <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
        <Text style={styles.btn_text}> Username </Text>
      </TouchableOpacity>
 
      <TouchableOpacity
        onPress={handleDecrement}
        style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
        <Text style={styles.btn_text}> Password </Text>
      </TouchableOpacity>

    <TextInput onChangeText = {(valu) => setUse(valu)} value = {use}/>
      <TouchableOpacity onPress = {handleusername}  style={styles.btn}><Text>submit</Text></TouchableOpacity>
    

      <Text>hi{usr}{count}</Text>
     
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
});