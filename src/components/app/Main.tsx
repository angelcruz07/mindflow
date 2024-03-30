import { View, StyleSheet, Text } from 'react-native';
import { Timer } from '@components';
import { Navigate, Route, Routes } from 'react-router-native';

export const Main = () => {
    return (
        <View>
            <Routes>
                <Route path="/" element={<Text>Hola</Text>} />
                <Route path="/meditation" element={<Text>Hola</Text>} />

            </Routes>
        </View>
    );
};
