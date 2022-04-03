import { StyleSheet, Text, View, Image, CheckBox } from 'react-native';
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import TextInputView from "../components/TextInput"

import {getContract } from '../services/userDataContract'

const DataSelection = ({ route, navigation }) => {
    const [items, setItems] = useState([])
    const [itemsHTML, setItemsHTML] = useState([])
    const [toggleCheckBox, setToggleCheckBox] = useState(false) 
    const [jsonUserData,] = useState(route.params.jsonUserData)
    const [account,] = useState(route.params.account)

    const [jsonUserPrefs, setJsonUserPrefs] = useState({
        exposeUserName: false,
        exposeUserEmail: false,
        exposeUserCPF: false,
    })

    useEffect(() => {
        setItems([
            { name: 'Nome de usuário', value: 'userName' },
            { name: 'Email', value: 'email' },
            { name: 'CPF', value: 'cpf' },
        ])
    }, [])

    useEffect(() => {
        console.log("")
        createItemsHTML()
    }, [items])

    // Function responsible to connect to Blockchain and send the user information, saving it there
    const addUserInfoToBlockchain = async () => {
        const contract = getContract(account);

        try {
            await contract.methods.setUserData(account, JSON.stringify(jsonUserData)).send({ from: account });
        }
        catch (err) {
            console.log("Error: ", err);
        }       
    }

    const createItemsHTML = () => {
        setItemsHTML(items.map((item, index) => {
            return (
                <React.Fragment key={`fragment-${index}`}>
                    <TextInputView 
                        key={`textInputUserData-${index}`} 
                        onChange={() => { console.log("Item") }} 
                        placeholder={item.name}
                        editable={false} 
                    />
                    <View key={`viewUserData-${index}`} style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ flex: 4, justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center' }}>
                            <Text style={[styles.text, { fontSize: 14, fontFamily: 'Poppins_200ExtraLight', color: 'white', marginStart: 10 }]}>Compartilhar Dado</Text>
                        </View>
                        <View style={{ flex: 4, justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center' }}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                        </View>
                    </View>
                </React.Fragment>
            )
        }))
    }

    const continuar = async () => {
        await addUserInfoToBlockchain();
        navigation.navigate('FinishRegister', { account, jsonUserData })
    }

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
                    <Text style={[styles.text, { fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: 'white' }]}>Para os cadastros nas empresas</Text>
                    <Text style={[styles.text, { fontSize: 24, fontFamily: 'Poppins_700Bold', color: 'white' }]}>Quais dados deseja</Text>
                    <Text style={[styles.text, { fontSize: 24, fontFamily: 'Poppins_700Bold', color: 'white' }]}>compartilhar?</Text>
                </View>
            </View>
            <View style={styles.content}>
                {itemsHTML}
            </View>
            <View style={styles.buttons}>
                <Button title={'Continuar'} action={continuar} backgroundColor='#134147' />
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
    buttons: {
        flex: 2,
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center'
    }
});


export default DataSelection