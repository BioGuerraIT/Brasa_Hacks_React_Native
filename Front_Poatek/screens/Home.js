import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { withWalletConnect } from '@walletconnect/react-native-dapp';

const Home = ({ route, navigation }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image_container}
                source={require('../assets/gradient.png')} ></Image>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image style={styles.logo_img}
                        source={require('../assets/logo.png')} resizeMode="contain"></Image>
                </View>
                <View style={styles.greeting}>
                    <Text style={[styles.text, { fontSize: 24, fontFamily: 'Poppins_700Bold', color: 'white' }]}>Controle de Dados</Text>
                    <Text style={[styles.text, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: 'white' }]}>Gerencie o compartihamento</Text>
                    <Text style={[styles.text, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: 'white'}]}>de seus dados</Text>
                </View>
            </View>
            <View style={styles.content}>
                <View style={[styles.card, { borderWidth: 0, backgroundColor: "white", alignItems: 'center'}]}>
                    <Text style={[styles.textCard, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: '3C3C43' }]}>Private Key: *******************</Text>
                    <Text style={[styles.textCard, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: '3C3C43' }]}>Public Key: ajft36rkcsydGFydmSr3</Text>
                </View>

                <Text style={[styles.text, { fontSize: 24, fontFamily: 'Poppins_700Bold', color: 'white' }]}>Empresas</Text>

                <View style={[styles.card, { borderWidth: 0, backgroundColor: "white"}]}>
                    <Text style={[styles.textCard, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: '3C3C43' }]}>Nome: Magazine Luiza</Text>
                    <Text style={[styles.textCard, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: '3C3C43' }]}>Dados: Nome, CPF, Email...</Text>
                    <Text style={[styles.textCard, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', textDecorationLine: 'underline', textAlign: "right", Fcolor: '3C3C43', marginEnd: 20 }]}>Gerenciar</Text>
                </View>

                <View style={[styles.card, { borderWidth: 0, backgroundColor: "white"}]}>
                    <Text style={[styles.textCard, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: '3C3C43' }]}>Nome: Americanas</Text>
                    <Text style={[styles.textCard, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: '3C3C43' }]}>Dados: Nome, Email, Telefone...</Text>
                    <Text style={[styles.textCard, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', textDecorationLine: 'underline', textAlign: "right", Fcolor: '3C3C43', marginEnd: 20 }]}>Gerenciar</Text>
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
        flex: 3,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
    },
    greeting: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 58,
        width: '100%'
    },
    text: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    textCard: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign:"left",
        margin: 4,
        marginStart: 10
    },
    logo: {
        flex: 42,
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
    },
    logo_img: {
        height: '100%',
        width: 187
    },
    content: {
        flex: 6,
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center'
    },
    card: {
        margin: 10,
        borderRadius: 30,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
        width: '90%',
    },
});

export default Home