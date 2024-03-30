import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Link, useLocation } from 'react-router-native';
import { COLORS } from '@constants'

const AppBarTab = ({ children, to }: any) => {
    const { pathname } = useLocation();
    const active = pathname === to;

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <TouchableOpacity>
                {children}
            </TouchableOpacity>
        </Link>
    );
};

export const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <AppBarTab to="/"><Image source={ require('@images/home.webp')}/></AppBarTab>
            <AppBarTab to="/meditation"><Image source={ require('@images/meditation.webp')}/></AppBarTab>
            <AppBarTab to="/community"><Image source={ require('@images/community.webp')}/></AppBarTab>
            <AppBarTab to="/resources"><Image source={ require('@images/file.webp')}/></AppBarTab>
            <AppBarTab to="/libreria"><Image source={ require('@images/book.webp')}/></AppBarTab>
        </View>
    );
};

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: COLORS.mediumDark,
        color: COLORS.white,
        height:  80,
        padding: 10,
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
});

