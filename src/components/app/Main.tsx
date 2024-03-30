import { View, Text } from 'react-native';
import { Timer, AppBar } from '@components';
import { Navigate, Route, Routes } from 'react-router-native';

export const Main = () => {
    return (
        <View>
            <AppBar/>
            <Routes>
                <Route path="/" element={<Timer/>} />
                <Route path="/meditation" element={<Text></Text>} />
                <Route path="*" element={<Navigate to='/' />}/>
            </Routes>
        </View>
    );
};
