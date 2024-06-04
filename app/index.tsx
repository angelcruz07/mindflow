import { SafeAreaView, StyleSheet } from 'react-native'
import { COLORS } from '@constants'
import { Main } from '@components/'
import { Stack } from 'expo-router'
import { NativeRouter } from 'react-router-native'
import { MeditationProvider } from '../src/context/MeditationContext'

const Home = () => {
	return (
		<MeditationProvider>
			<SafeAreaView style={styles.container}>
				<Stack.Screen
					options={{
						headerStyle: { backgroundColor: COLORS.backgroundTopBar },
						headerTintColor: COLORS.primaryColor,
						headerTitleAlign: 'center',
						headerTitle: 'MINDFLOW'
					}}></Stack.Screen>
				<NativeRouter>
					<Main />
				</NativeRouter>
			</SafeAreaView>
		</MeditationProvider>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
