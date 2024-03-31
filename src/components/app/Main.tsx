import { View, Text, StyleSheet } from 'react-native';
import { Timer } from '../ui/meditation/Timer'
import { AppBar } from '../ui/appbar/AppBar'
import {NativeRouter, Navigate, Route, Routes } from 'react-router-native';
import { COLORS } from "@constants";
import {LinearGradient} from "expo-linear-gradient";


export const Main = () => {
    return (
        <LinearGradient
            // Array of colors for gradient
            colors={['#1EB782', '#131C1D', '#162021']}
            // Starting point of the gradient
            start={{ x: -1.5 , y: 0.2 }}
            // Ending point of the gradient
            end={{ x: 1.6, y: 1 }}
            style={StyleSheet.absoluteFillObject}
        >
                    <View style={styles.container}>
                        <Routes>
                            <Route path="/" element={<Timer/>} />
                            <Route path="/meditation" element={<Text>Vete a la verga</Text>} />
                            <Route path="/community" element={<Text>No mi compa</Text>} />
                            <Route path="*" element={<Navigate to='/' />}/>
                        </Routes>
                        <AppBar/>
                    </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

