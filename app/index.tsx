import { SafeAreaView, StyleSheet } from 'react-native'
import { COLORS }  from "@constants";
import { Main }   from "@components/"
import {Stack} from "expo-router";
import { NativeRouter } from "react-router-native"

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen style={styles.text} options={{
                headerStyle: {backgroundColor: COLORS.background, color: COLORS.darker, fontWeight: 'bold'},
                headerTintColor: COLORS.darker,
                headerTitle: "MINDFLOW"}}>
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
