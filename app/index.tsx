import  {Text, SafeAreaView, StyleSheet} from 'react-native'
import { COLORS }  from "../src/constants";
import {useRouter, Stack} from "expo-router";
import { Main, AppBar } from "@components";


const Home = () => {

    const router  = useRouter()

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen style={styles.text} options={{
                headerStyle: {backgroundColor: COLORS.background, color: COLORS.white},
                headerTintColor: COLORS.white,
                 headerTitle: "Mind  Flow"}}>
                <Text style={styles.text}>Home</Text>

            </Stack.Screen>
            <Main/>
            <AppBar/>
        </SafeAreaView>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    text: {
        color: COLORS.white
    }
})
