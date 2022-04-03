import {
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins'

export default useFonts = async () =>
    await Font.loadAsync({
        Poppins_200ExtraLight,
        Poppins_400Regular,
        Poppins_700Bold
    });