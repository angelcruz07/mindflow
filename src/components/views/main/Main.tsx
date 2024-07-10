import { View, StyleSheet } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TopBar, Timer, AppBar } from '../../ui'
import { CalendarPage } from '../calendar/CalendarPage'
import { Summary } from '../summary/SummaryPage'

export const Main = () => {
  return (
    <LinearGradient
      // Array of colors for gradient
      colors={['#1EB782', '#131C1D', '#162021']}
      // Starting point of the gradient
      start={{ x: -1.5, y: 0.2 }}
      // Ending point of the gradient
      end={{ x: 1.6, y: 1 }}
      style={StyleSheet.absoluteFillObject}>
      <View style={styles.container}>
        <TopBar />
        <Routes>
          <Route path='/' element={<Timer />} />
          <Route path='/meditation' element={<Timer />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <AppBar />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
