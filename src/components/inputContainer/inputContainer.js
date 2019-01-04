import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const inputContainer=(props)=>{
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Type Something"
        value={props.placeName}
        onChangeText={props.changePlace}
        style={styles.inputField}/>
      <Button title="Send" style={styles.addButton} onPress={props.submitChange}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  inputField:{
    width:'70%',
  },
  addButton:{
    width:'30%'
  },
});

export default inputContainer;
