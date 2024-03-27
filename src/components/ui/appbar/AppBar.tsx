import {View, Image, StyleSheet, TouchableOpacity} from "react-native"
import { COLORS } from '@constants'
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

interface AppBarStyles {
    appBar: ViewStyle;
}

export const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <TouchableOpacity>
                <Image source={ require('@images/home.webp')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={ require('@images/meditation.webp')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={ require('@images/community.webp')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={ require('@images/file.webp')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={ require('@images/book.webp')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles :AppBarStyles  = StyleSheet.create({
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
})
