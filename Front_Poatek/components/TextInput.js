import { StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function TextInputView({type = 'text', secureTextEntry = false, backgroundColor = "white", color = '#595959', placeholder, onChange, padding =22, margin = 4, width = '80%', ...props}) {
   
    const [textInputInfo, setTextInputInfo] = useState('')

    useEffect(() => {
        onChange(textInputInfo)
    }, [textInputInfo])

    return(
        <TextInput {...props} type={type} secureTextEntry={secureTextEntry} placeholderTextColor={'#595959'} onChangeText = {setTextInputInfo} value = {textInputInfo} style = {[styles.inputText, {borderWidth: 0, padding, margin, width, backgroundColor, color}]} placeholder = {placeholder}/>
    )
}

const styles = StyleSheet.create({
    inputText: {
        padding: 50,
        margin: 30,
        borderRadius: 30,
        textAlign: 'left',
        fontSize: 15,
        fontFamily: 'Poppins_400Regular'
    }
})