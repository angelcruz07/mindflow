import { SafeAreaView, StyleSheet } from 'react-native'
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { COLORS } from '@/constants'
import { Main } from '@/components/views'
import { MeditationProvider } from '@/context'

const Home = () => {
  return (
    <MeditationProvider>
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.backgroundTopBar },
            headerTintColor: COLORS.primaryColor,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: ''
            },
            headerTitle: 'Mind Flow'
          }}></Stack.Screen>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </SafeAreaView>
      <StatusBar style='light' />
    </MeditationProvider>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
