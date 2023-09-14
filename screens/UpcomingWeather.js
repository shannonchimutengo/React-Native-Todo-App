import React from "react";
import {SafeAreaView,StyleSheet,View, FlatList,Text,StatusBar,ImageBackground} from "react-native";
import { Feather } from '@expo/vector-icons';

const DATA =     [{
    "dt_txt": "2022-08-30 16:00:00",
    "main": {
        "temp_max": 29.4,
        "temp_min": 29.3
    },
    "weather": [
        {
          "main": "Rain",
        }]
},
{"dt_txt": "2022-08-30 16:00:00",
"main": {
    "temp_max": 45.2,
    "temp_min": 9.6
},
"weather": [
    {
      "main": "Snow",
    }]
},
{"dt_txt": "2022-08-30 16:00:00",
"main": {
    "temp_max": 45.2,
    "temp_min": 9.6
},
"weather": [
    {
      "main": "Snow",
    }]
},
{"dt_txt": "2022-08-30 16:00:00",
"main": {
    "temp_max": 45.2,
    "temp_min": 9.6
},
"weather": [
    {
      "main": "Snow",
    }]
},
{"dt_txt": "2022-08-30 16:00:00",
"main": {
    "temp_max": 45.2,
    "temp_min": 9.6
},
"weather": [
    {
      "main": "Snow",
    }]
},
{"dt_txt": "2022-08-30 16:00:00",
"main": {
    "temp_max": 45.2,
    "temp_min": 9.6
},
"weather": [
    {
      "main": "Snow",
    }]
},
{"dt_txt": "2022-08-30 16:00:00",
"main": {
    "temp_max": 45.2,
    "temp_min": 9.6
},
"weather": [
    {
      "main": "Snow",
    }]
},
{"dt_txt": "2022-08-30 16:00:00",
"main": {
    "temp_max": 45.2,
    "temp_min": 9.6
},
"weather": [
    {
      "main": "Snow",
    }]
},
{"dt_txt": "2022-08-30 16:00:00",
"main": {
    "temp_max": 27.7,
    "temp_min": 2.1
},
"weather": [
    {
      "main": "Clear",
    }]
}


]
                     
const Item = (props) =>{
    const {dt_txt,min,max,condition} = props;
    return(
        <View style = {styles.item} >
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style = {styles.date}>{dt_txt}</Text>
            <Text style = {styles.temp}>{min}</Text>
            <Text  style = {styles.temp}> {max}</Text>
        </View>
    )
}
                  
const  UpcomingWeather = () =>{
    const renderItem = ({item}) =>(
        <Item condition = {item.weather[0].main} 
        dt_txt = {item.dt_txt} 
        min = {item.main.temp_min} 
        max = {item.main.temp_max}/>
    )

    return(
        
        <SafeAreaView style= {styles.container}>
        
         <ImageBackground
         style = {styles.image}
         source={require('C:/Users/Shannon/reactnativeproj/assets/nature.jpg')}
         >
             <Text style = {styles.text}>Upcoming Weather</Text>
          <FlatList
           data={DATA}
           renderItem = {renderItem}
           keyExtractor={(item) => {item.dt_txt}}
           
            />
            </ImageBackground>
         
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({

    container:{
        
       marginTop: StatusBar.currentHeight || 0,
       alignContent:"center",
       backgroundColor: "red",
        
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal:16,
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems:"center",
        borderWidth:5,
        backgroundColor:"pink"
    
    },
    temp: {
        color:"white",
        fontSize:20
    },
    date:{
        color:"white",
        fontSize:15
    },
    image:{
        color:"royalblue"
    },
    text:{
    
        marginHorizontal: 80,
        flexDirection:"row",
        fontSize: 20
    }

   
})
export default UpcomingWeather;