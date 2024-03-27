import { View, StyleSheet } from 'react-native';
import { Timer } from '@components';

export const Main = () => {
    return (
        <View style={styles.container}>
          <Timer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25
    },
})
