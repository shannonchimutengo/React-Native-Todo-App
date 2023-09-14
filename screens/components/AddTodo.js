import React, { useState} from 'react';
import { View,StyleSheet,TextInput, Alert,Button} from 'react-native';


export default function AddTodo({onSubmitHandler}){
const [text , setText] = useState('');

const changeHandler = (val) =>{
    setText(val);
}


    return(
        <View>
            <TextInput
            placeholder = {'Add todo...'}
            onChangeText = {(val) => changeHandler(val)}
            style = {styles.textInput}
            />
            <Button
             onPress ={() => onSubmitHandler(text)}
             title = {'Add text'}
            />
        </View>
    )
}

const styles = StyleSheet.create({

 textInput:{
    borderColor:'black',
    borderWidth: 10,
    borderRadius:5,
    padding:10
 }

})