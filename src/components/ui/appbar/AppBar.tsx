import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Link, useLocation } from 'react-router-native';
import { COLORS } from '@constants'

// @ts-ignore
const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation();
    const active = pathname === to;
    const textStyles  = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to} component={TouchableOpacity}>
                {children}
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
    active: {
        color: COLORS.darker,
    },
    text: {
        color: COLORS.darker,
        paddingHorizontal: 10
    },
});

