import TextInputView from "../components/TextInput"
import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from "react";
import Button from "../components/Button";

const DataInsertion2 = ({ route, navigation }) => {
    const [items, setItems] = useState([])
    const [itemsHTML, setItemsHTML] = useState([])
    const [data, setData] = useState({})
    const [account, setAccount] = useState('')
    const [itemsSelected, setItemsSelected] = useState(['', '', '', '', ''])

    useEffect(() => {
        setItems([
            { name: 'Gênero', value: 'gender' },
            { name: 'Carteira de Motorista', value: 'driverLicense' },
            { name: 'Endereço', value: 'address' },
            { name: 'RG', value: 'nationalID' },
            { name: 'Nacionalidade', value: 'nacionality' }
        ]) 

        if (route.params && route.params.jsonUserData) {
            console.log("Initializing json with route params (from last page): ", route.params.jsonUserData)
            setData(route.params.jsonUserData)
        }

        if (route.params && route.params.account) {
            setAccount(route.params.account)
        }
    }, [])

    useEffect(() => {
        console.log(items)
        createItemsHTML()
    }, [items])

    const createItemsHTML = () => {
        setItemsHTML(items.map((item, index) => {
            return (
                <TextInputView key={`formInput-${index}`} onChange={(data) => {
                    setNewValue(index, item.value, data)
                }} placeholder={item.name} />
            )
        }))
    }

    const setNewValue = (index, type, value) => {
        const arr = itemsSelected
        console.log(arr)
        arr[index] = `${type}=${value}`
        console.log(arr)
        setItemsSelected(arr)
    }

    const finishProfile = () => {
        let jsonUserData = data;

        itemsSelected.forEach(item => {
            const [field, value] = item.split('=');
            jsonUserData[field] = value
        });

        console.log("User data as JSON (dataInsertion2):", jsonUserData);
        
        navigation.navigate('DataSelection', { part: 3, account, jsonUserData });
    }

    const registerData = () => {
        axios.post('http://localhost:8082/register', {
            account,
            data
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((response) => {
            navigation.navigate('Login')
        })
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
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins_200ExtraLight', color: 'white' }}>Queremos te conhecer!</Text>
                    <Text style={{ fontSize: 24, fontFamily: 'Poppins_700Bold', color: 'white' }}>Construa Sua Identidade</Text>
                </View>
            </View>
            <View style={styles.content}>
                {itemsHTML}
            </View>
            <View style={styles.buttons}>
                <Button title={'Finalizar Perfil!'} action={finishProfile} backgroundColor='#134147' />
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
        flex: 2,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center'
    },
    greeting: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 58
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
        flex: 5,
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flex: 3,
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center'
    }
});

export default DataInsertion2