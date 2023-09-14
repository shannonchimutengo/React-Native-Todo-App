import React, { useState} from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, onPressHandler}){

    return(
        <TouchableOpacity  onPress = {() =>onPressHandler(item.key)}>
            <View style = {styles.item}>
               <MaterialIcons name='delete' style = {styles.icon}/> 
            <Text>{item.text}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        paddingTop:16,
        marginTop:16,
        borderColor:'coral',
        borderRadius:10,
        borderStyle:'dashed',
        borderWidth:2,
        flexDirection:'row',
        
    },

    icon:{
        width:30,
        height: 30
    }

})