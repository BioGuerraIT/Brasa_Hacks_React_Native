import Button from '../components/Button'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextInputView from '../components/TextInput';

const Login = ({ navigation }) => {
    const [loginInfoName, setLoginInfoName] = useState('')
    const [loginInfoPN, setLoginInfoPN] = useState('')
    const [imageTime, setImageTime] = useState(0)

    useEffect(() => {
        if (imageTime <= 2) {
            setTimeout(() => {
                setImageTime(time => time + 1)
            }, 1000)
        }
    })

    useEffect(() => {
        console.log(imageTime)
    }, [imageTime])

    const enter = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            {imageTime > 2 ? (
                <>
                    <View style={styles.logo}>
                        <Image style={styles.logoImg} source={require('../assets/icon.png')} />
                    </View>
                    <View style={styles.enter}>
                        <Button title='Enter' action={enter} /> 
                    </View>
                </>
            ) : (
                <Image style={styles.logoImg2} source={require('../assets/icon.png')} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#231f20',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: '40%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
    },
    brandText: {
        fontSize: 25,
        margin: 20
    },
    input: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    enter: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImg: {
        height: 350,
        width: 350,
    },
    button: {
        width: '80%',
        padding: 10,
        backgroundColor: '#4285f4',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: '500'
    },
    enterButton: {
        alignSelf: 'stretch',
        borderRadius: 4,
    },
    enterButtonText: {
        fontSize: 50
    },
    logoImg2: {
        height: 400,
        width: 400
    },
    text: {
        fontSize: 14,
        color: 'white',
        textDecorationLine: 'underline'
    }
});

export default Login