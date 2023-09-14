import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CurrentWeather() {
  return (
    <SafeAreaView style = {styles.wrapper}>
    <View style = {styles.container}>
    <Feather name="sun" size={100} color="black" />
      <Text style = {styles.temp}>6</Text>  
      <Text style = {styles.feels}>Feels Like 5</Text>
      <Text style =  {styles.highLow}>High: 8 Low: 6 </Text>
    </View>
  <View>
    <View style = {styles.BodyWrapper}>
    <Text style = {styles.description}>It's Sunny </Text>
    <Text style = {styles.message}>Its perfect Tshirt weather</Text>
    </View>
    
  </View>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
       marginTop: StatusBar.currentHeight || 0,
       alignItems: 'center',
       backgroundColor: "pink",
       justifyContent: "center"
       
  },
  wrapper: {
    flex: 1,
    
  },
  temp: {
    color: "black",
    fontSize: 48

  },
  feels: {
    color: "black",
    fontSize: 30
  },
  highLow: {
    color: "black",
    fontSize: 20

  },
  description: {
    color: "black",
    fontSize: 48
  },
  message: {
    color: "black",
    fontSize: 20
  },
  BodyWrapper:{
    justifyContent: "flex-end",
    alignItems:"flex-start"
  }




});
