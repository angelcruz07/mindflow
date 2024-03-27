import {StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import {COLORS} from "@constants";

export const Timer = () => {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.timer}>
                <Text style={styles.text}>5:00</Text>
            </TouchableOpacity>

            <View style={styles.playContainer}>
                <TouchableOpacity style={styles.playButton}>
                    <Image source ={require('@images/play.webp') }/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                    <Image source ={require('@images/stop.webp') }/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                    <Image source ={require('@images/reset.webp') }/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', // Aligning items in the center horizontally
    },
    timer: {
        backgroundColor: COLORS.dark,
        borderRadius: 1000,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        // Add styles for TouchableOpacity if needed
    },
    playContainer: {
        marginTop: 30,
        flexDirection: 'row',
        gap: 10
    },
    playButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundSecundary,
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    text: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 28,
    }
});
