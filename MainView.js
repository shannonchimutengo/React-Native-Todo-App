import React, { useState} from 'react';
import { View,Text,StyleSheet, StatusBar, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Header from './screens/components/Header';
import TodoItem from './screens/todoItem';
import AddTodo from './screens/components/AddTodo';
export default function MainView(){

 const [todos, setTodos] = useState([
    {text: 'fishing today', key: '1'},
    {text: 'coding in java', key: '2'},
    {text: 'walking at 10:30 today', key: '3'},
    {text: 'buying breakfast for the family', key: '4'},
    {text: 'cleaning my room', key: '5'},
    {text: 'taking the dog for a walk', key: '6'}
  
 ]);

 const onPressHandler = (id) =>{
    setTodos((prevTodos) =>{
        return prevTodos.filter(todo => todo.key != id);
    })
 }
 
 const onSubmitHandler = (text) =>{
    if(text.length> 3){
        setTodos((prevTodos) =>{
            return [
                 {text: text, key: Math.random().toString()},
                ...prevTodos
            ]
        })
    }else{
        Alert.alert('Error Todos', 'chars must be greater than 3',[
            {text: 'Understood', onPress: () => alert('ok fine')},
            {text: 'Cancel', onPress: () => alert('ok cancelled')}
        ])
    }
    

 }

 return(
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss}>
    <View style = {styles.container}>
        <Header/>
        <AddTodo onSubmitHandler = {onSubmitHandler} />
        <View style = {styles.content}>
            {/* Main Content */}
            <View>
                <FlatList
                data = {todos}
                renderItem = {({item}) =>(
                <TodoItem item = {item} onPressHandler = {onPressHandler}/>
  ) }
                />
            </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
 )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // justifyContent:'center',
       // alignItems:'center',
        marginTop: StatusBar.currentHeight || 0,
       
    },
    Btn: {
        flex:1,
        marginTop: 10
 
    },
    input: {
        flex:1,
        borderWidth:2,
        borderColor: '#777',
        padding: 8,
        width:180,
        margin: 15,
       
        

    },
    item:{
        flex:1,
        padding:30 ,
        paddingHorizontal:20,
        marginTop:20,
        backgroundColor:"pink",
        fontSize:24


    },
    content:{
flex:1
    }
}) ;