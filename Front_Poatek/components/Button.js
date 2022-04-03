import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import {
    Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';

export default function Button({ title, action, width = '80%', backgroundColor, textColor = 'white', fontSize = 16 }) {
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
    });

    return (
        <TouchableOpacity style={[styles.button, { width, backgroundColor }]} onClick={action} onPress={action}>
            <Text style={{ color: textColor, fontSize, fontFamily: 'Poppins_700Bold' }}>{title}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 45,
        shadowOffset: {
            width: 9,
            height: 15
        },
        shadowOpacity: 0.1,
        shadowRadius: 30
    }
})