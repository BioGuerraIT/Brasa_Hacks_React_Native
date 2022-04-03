import TextInputView from "../components/TextInput"
import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from "react";
import Button from "../components/Button";

const FinishRegister = ({ route, navigation }) => {

    const [imageTime, setImageTime] = useState(0)

    useEffect(() => {
        if (imageTime <= 3) {
            setTimeout(() => {
                setImageTime(time => time + 1)
            }, 1000)
        }
    })

    useEffect(() => {
        console.log(imageTime)
    }, [imageTime])

    const continuar = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image_container}
                source={require('../assets/gradient.png')} ></Image>
            <View style={styles.header}>
                <View style={styles.shield}>
                    <Image style={styles.shield_img}
                        source={require('../assets/q4.png')} resizeMode="contain"></Image>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.greeting}>
                    <Text style={[styles.text, { fontSize: 24, fontFamily: 'Poppins_700Bold', color: 'white' }]}>Cadastro</Text>
                    <Text style={[styles.text, { fontSize: 24, fontFamily: 'Poppins_700Bold', color: 'white' }]}>Confirmado!</Text>
                    <Text style={[styles.text, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: 'white' }]}>Retornando à aplicação</Text>
                    <Text style={[styles.text, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: 'white' }]}>principal</Text>
                </View>
                <View style={styles.buttons}>
                    {imageTime > 3 ? (
                        <Button style={styles.button} title={'Continuar'} action={continuar} backgroundColor='#134147' />
                    ) : (
                        <></>
                    )}
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.logo}>
                    <Image style={styles.logo_img}
                        source={require('../assets/logo.png')} resizeMode="contain"></Image>
                </View>
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
    header: {
        flex: 4,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center'
    },
    shield: {
        flex: 60,
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    shield_img: {
        height: '70%',
        width: 187
    },
    greeting: {
        flex: 6,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    text: {
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 4,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flex: 4,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    button: {
        width: '80%'
    },
    footer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end'
    },
    logo: {
        flex: 42,
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
        marginEnd: 10
    },
    logo_img: {
        height: '50%',
        width: 150
    },
});

export default FinishRegister