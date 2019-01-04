import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/listItem/listItem'
import InputContainer from './src/components/inputContainer/inputContainer'

export default class App extends React.Component {
  state={
    placeName:'',
    places:[]
  }

  placeNameChangeHandle=(event)=>{
    this.setState({
      placeName:event
    })
  }
  placeNameSubmitHandle=()=>{
    if(this.state.placeName.trim()===""){
      return;
    }
    this.setState(prevState=>{
      return{
        places:prevState.places.concat(prevState.placeName)
      }
    })
  }
  render() {
    const outputPlaces=this.state.places.map((place,i)=>{
      return <ListItem key={i} placeName={place}/>
    })
    return (
      <View style={styles.container}>
        <InputContainer changePlace={this.placeNameChangeHandle} submitChange={this.placeNameSubmitHandle} placeName={this.state.place}/>
        <View style={styles.outputPlaces}>{outputPlaces}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  outputPlaces:{
    width:'100%'
  }
});
