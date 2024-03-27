import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
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
                <Text style={styles.text}>5:00</Text>
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

const styles = StyleSheet.create({
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
        backgroundColor: COLORS.dark,
        borderRadius: 1000,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        gap: 20
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
