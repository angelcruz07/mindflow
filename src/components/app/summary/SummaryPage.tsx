import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SIZES } from '@constants'
import { LinearGradient } from 'expo-linear-gradient'
import { CalendarApp } from '../../ui/calendar/Calendar'

export const Summary = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.container}>
        <View style={styles.summary}>
          <Text style={styles.title}>Has meditado durante:</Text>
          <View style={styles.containerSummary}>
            <LinearGradient
              colors={['rgba(64,199,148,1)', 'rgba(5,41,31,1)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}>
              <Text style={styles.months}>3</Text>
              <Text style={styles.months}>Meses</Text>
            </LinearGradient>
          </View>
        </View>

        <View style={styles.containerCalendar}>
          <CalendarApp />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: SIZES.fontSizes.large,
    fontWeight: '500',
    marginBottom: 20
  },
  summary: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerSummary: {
    width: 200,
    height: 200,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  containerCalendar: {
    paddingBottom: 50
  },
  gradient: {
    alignItems: 'center',
    borderRadius: 1000,
    flex: 1,
    justifyContent: 'center',
    width: 200
  },
  months: {
    color: '#fff',
    fontSize: SIZES.fontSizes.large,
    fontWeight: 'bold'
  }
})
