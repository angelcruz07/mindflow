import { StyleSheet, Text, TouchableOpacity, View, Image, ViewStyle, TextStyle, ImageStyle } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from "@constants";
const MOOD = [
    {
        id: 1,
        name: 'Todos',
    },
    {
        id: 2,
        name: 'Dormir',
    },
    {
        id: 3,
        name: 'Relajarse'
    },
    {
        id: 4,
        name: 'Feliz'
    },
    {
        id: 5,
        name: 'Cansado'
    }
];

export const Timer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.timer}>
                <LinearGradient
                    // Array of colors for gradient
                    colors={['rgba(64,199,148,1)', 'rgba(5,41,31,1)']}
                    // Starting point of the gradient
                    start={{ x: 0, y: 0 }}
                    // Ending point of the gradient
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    <Text style={styles.text}>5:00</Text>
                </LinearGradient>
            </TouchableOpacity>
            <View style={styles.playContainer}>
                <TouchableOpacity style={styles.playButton}>
                    <Image source={require('@images/play.webp')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                    <Image source={require('@images/stop.webp')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                    <Image source={require('@images/reset.webp')} />
                </TouchableOpacity>
            </View>
            <Text style={{color: '#fff', marginTop: 15}}>Selecciona un estado de amimo para meditar</Text>
            {/* Todo: Agregar los iconos y mejorar el diseño*/}
            <View style={styles.mood} >
                {
                    MOOD.map((mood) => {
                        return (
                            <TouchableOpacity style={styles.moodButton} key={mood.id}>
                                <Text style={styles.moodText}>{mood.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    );
}


interface Styles {
    container: ViewStyle;
    mood: ViewStyle;
    moodButton: ViewStyle;
    moodText: TextStyle;
    timer: ViewStyle;
    playContainer: ViewStyle;
    playButton: ViewStyle;
    text: TextStyle;
    gradient: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        alignItems: 'center', // Aligning items in the center horizontally
    },
    mood: {
      flexDirection: 'row',
        gap: 20,
        marginTop: 20,
    },
   moodButton: {
       backgroundColor:  COLORS.backgroundSecundary,
        padding: 10,
        borderRadius: 30,
        height: 80,
        justifyContent: 'center',
        maxWidth: 65,
   },
    moodText:{
      color: '#fff',
        fontSize: 10
    },
    timer: {
        height: 200,
        width: 200,
    },
    playContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        gap: 20
    },
    playButton: {
        alignItems: 'center',
        backgroundColor: COLORS.backgroundSecundary,
        borderRadius: 50,
        height: 60,
        justifyContent: 'center',
        width: 60,
    },
    text: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 28,
    },
    gradient: {
        alignItems: 'center',
        borderRadius: 1000,
        flex: 1,
        justifyContent: 'center',
        width: 200,
    },
});
