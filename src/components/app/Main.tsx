import { View, Text, StyleSheet } from 'react-native';
import { Timer } from '../ui/meditation/Timer'
import { AppBar } from '../ui/appbar/AppBar'
import {NativeRouter, Navigate, Route, Routes } from 'react-router-native';
import { COLORS } from "@constants";

export const Main = () => {
    return (
        <View style={styles.container}>
                <Routes>
                    <Route path="/" element={<Timer/>} />
                    <Route path="/meditation" element={<Text>Vete a la verga</Text>} />
                    <Route path="/community" element={<Text>No mi compa</Text>} />
                    <Route path="*" element={<Navigate to='/' />}/>
                </Routes>
                <AppBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.background,
    }
})
