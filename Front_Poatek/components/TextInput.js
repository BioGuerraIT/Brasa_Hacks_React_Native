import { StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function TextInputView({type = 'text', secureTextEntry, backgroundColor = "#fdbe57", color = 'white', placeholder, onChange, padding = 10, margin = 4, width = '80%'}) {
   
    const [textInputInfo, setTextInputInfo] = useState('')

    useEffect(() => {
        onChange(textInputInfo)
    }, [textInputInfo])

    return(
        <TextInput type={type} secureTextEntry={secureTextEntry} placeholderTextColor={'white'} onChangeText = {setTextInputInfo} value = {textInputInfo} style = {[styles.inputText, {borderWidth: 0, padding, margin, width, backgroundColor, color}]} placeholder = {placeholder}/>
    )
}

const styles = StyleSheet.create({
    inputText: {
        padding: 50,
        margin: 30,
        borderRadius: 30,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    }
})