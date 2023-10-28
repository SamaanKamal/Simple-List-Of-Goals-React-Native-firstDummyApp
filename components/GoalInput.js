import { useState } from "react";
import { StyleSheet,View,TextInput,Button } from "react-native"; 
const GoalInput =(props)=>{
    const [goalsList,setGoalsList] = useState('');
    const goalInputHandler=(enteredText)=>{
        setGoalsList(enteredText);
    };
    const addGoalHandler=()=>{
        props.addGoalHandler(goalsList);
        setGoalsList('');
    };
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Enter Your Goal' onChangeText={goalInputHandler} value={goalsList}/>
            <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:24,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
    },
    textInput:{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'70%',
        marginRight:8,
        padding:8
    },
});