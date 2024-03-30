import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import { Link, useLocation } from 'react-router-native';
import { COLORS } from '@constants'

// @ts-ignore
const AppBarTab = ({ to, text, children }) => {
    const { pathname } = useLocation();
    const active = pathname === to;
    const textStyles  = [
        styles.text,
        active && styles.active
    ]
    return (
            <TouchableOpacity activeOpacity={1}>
                <Link to={to} >
                    <View style={styles.link}>
                        {children}
                        <Text style={textStyles}>
                            {text}
                        </Text>
                    </View>
                </Link>
            </TouchableOpacity>
    );
};

export const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <AppBarTab to="/"  text='Inicio' >
                <Image source={require('@images/home.webp')} />
            </AppBarTab>
            <AppBarTab to="/meditation" text='Meditacion '>
                <Image source={ require('@images/meditation.webp')}/>
            </AppBarTab>
            <AppBarTab to="/community" text='Comunidad'>
                <Image source={ require('@images/community.webp')}/>
            </AppBarTab>
        </View>
    );
};

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: COLORS.backgroundBottomBar,
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
    link: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    active: {
        color: COLORS.primaryColor,
    },
    text: {
        color: '#fff',
        paddingHorizontal: 10
    },
    touchable: {

    }
});

