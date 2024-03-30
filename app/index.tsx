import {Text, SafeAreaView, StyleSheet, Image} from 'react-native'
import { COLORS }  from "@constants"
import {useRouter, Stack} from "expo-router"
import {NativeRouter} from "react-router-native"
import { Main } from "@components"


const Home = () => {

    const router  = useRouter()

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen style={styles.text} options={{
                headerStyle: {backgroundColor: COLORS.background, color: COLORS.darker, fontWeight: 'bold'},
                headerTintColor: COLORS.darker,
                 headerTitle: "MINDFLOW"}}>
                <Image source={ require('@images/logochico.webp')} width={20} height={20}/>
                <Text style={styles.text}>Home</Text>
            </Stack.Screen>
            <NativeRouter>
                <Main/>
            </NativeRouter>
        </SafeAreaView>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    text: {
        color: COLORS.white
    },
})
