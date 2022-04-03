import TextInputView from "../components/TextInput"
import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from "react";
import Button from "../components/Button";

const FinishRegister = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image_container}
                source={require('../assets/gradient.png')} ></Image>
            <View style={styles.content}>
                <Image 
                    source={require('../assets/q4.png')} resizeMode="contain"></Image>
                <Text style={{ fontSize:32, fontFamily: 'Poppins_700Bold', color: 'white' }}>Construa Sua Identidade</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: 'white' }}>Queremos te conhecer!</Text>
            </View>
            <View style={styles.footer}>
                <Image style={styles.logo_img}
                    source={require('../assets/logo.png')} resizeMode="contain"></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'stretch'
    },
    image_container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
    },
    content: {
        flex: 9,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'flex-end',
        alignItems: 'flex-end'
    },
    logo_img: {
        height: '100%',
        width: 200
    }
});

export default FinishRegister