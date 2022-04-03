import Button from '../components/Button'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextInputView from '../components/TextInput';
// import LinearGradient from 'react-native-linear-gradient';

import { useFonts } from 'expo-font';

const Login = ({ navigation }) => {
    const [loginInfoName, setLoginInfoName] = useState('')
    const [loginInfoPN, setLoginInfoPN] = useState('')

    const enter = () => {
        navigation.navigate('Home')
    }

    // usetstate for storing and retrieving wallet details
    const [data, setdata] = useState({
        address: "",
    });

    // Button handler button for handling a
    // request event for metamask
    const btnhandler = () => {
        // Asking if metamask is already present or not
        if (window.ethereum) {
            // res[0] for fetching a first wallet
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => {
                    accountChangeHandler(res[0])
                });
        } else {
            alert("install metamask extension!!");
        }
    };

    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        // Setting an address data
        setdata({
            address: account,
        });

        navigation.navigate('DataInsertion1', {part: 1, account})
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image_container}
                source={require('../assets/gradient.png')} ></Image>
            <View style={styles.header}>
                <View style={styles.shield}>
                    <Image style={styles.shield_img}
                        source={require('../assets/q4.png')} resizeMode="contain"></Image>
                </View>
                <View style={styles.logo}>
                    <Image style={styles.logo_img}
                        source={require('../assets/logo.png')} resizeMode="contain"></Image>
                </View>

            </View>
            <View style={styles.content}>
                <View style={styles.greeting}>
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: 'white' }}>Olá!</Text>
                    <Text style={{ fontSize: 34, fontFamily: 'Poppins_700Bold', color: 'white' }}>Vamos começar?</Text>
                </View>
                <View style={styles.actions}>
                    <View style={{ flex: 15, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins_400Regular', color: 'white' }}>Primeira vez na plataforma?</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Button title={'Cadastra-se com Blockchain'} action={btnhandler} backgroundColor='#134147' />
                        <View style={{ width: '100%', paddingHorizontal: 30, flexDirection: 'row', marginVertical: 30, justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
                            <View style={styles.dashedLine}></View>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins_200ExtraLight', color: 'white' }}>Ou</Text>
                            <View style={styles.dashedLine}></View>
                        </View>
                        <Button title={'Entre com Blockchain'} action={() => enter} backgroundColor='rgba(255,255,255,0.28)' />
                    </View>
                </View>
            </View>
        </View>
    );
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
    header: {
        flex: 3,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 40,
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
    },
    shield: {
        flex: 60,
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
    },
    logo_img: {
        height: '70%',
        width: 187
    },
    shield_img: {
        height: '70%',
        width: 187
    },
    content: {
        flex: 7
    },
    greeting: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 3
    },
    actions: {
        flex: 7,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'stretch',
    },
    buttons: {
        flex: 85,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center'
    },
    dashedLine: {
        height: 0,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        borderStyle: 'dashed',
        width: '45%'
    }
});

export default Login