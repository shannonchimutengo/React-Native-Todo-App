import React, { useState} from 'react';
import { View,Text,StyleSheet, } from 'react-native';


export default function(){

    return(
        <View style = {styles.container}>
            <Text style  = {styles.title}>
                TODO LIST
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:28,
        backgroundColor: 'coral',
        height:80

    },
    title:{
        textAlign:'center',
        justifyContent:'center',
        fontWeight:'bold'
        
        
    }
})