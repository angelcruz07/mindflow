import React from 'react'
import { View, ScrollView } from 'react-native'
import { Notes, CalendarApp } from '@/components/ui/'

export const CalendarPage = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.container}>
        <CalendarApp />
        <Notes />
      </View>
    </ScrollView>
  )
}

const styles = {
  container: {
    padding: 30
  }
}
