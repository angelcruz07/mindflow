import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Link, useLocation } from 'react-router-native';

const AppBarTab = ({ children, to }: any) => {
    const { pathname } = useLocation();
    const active = pathname === to;

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <Text style={[styles.tabText, active && styles.activeTabText]}>
                {children}
            </Text>
        </Link>
    );
};

export const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <AppBarTab to="/">Inicio</AppBarTab>
            <AppBarTab to="/meditation">Meditación</AppBarTab>
        </View>
    );
};

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: '#333',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabText: {
        color: '#fff',
        fontSize: 16,
    },
    activeTabText: {
        fontWeight: 'bold', // Opcional: cambia el estilo del texto cuando está activo
    },
});

