import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '@constants'
import { useLocation, Link } from 'react-router-native'

// @ts-ignore
const TopBarTab = ({ to, text }) => {
  const { pathname } = useLocation()
  const active = pathname === to
  // color if active
  const textStyle = active ? styles.textActive : styles.text
  const containerStyle = active ? styles.active : styles.link

  return (
    <TouchableOpacity activeOpacity={1}>
      <Link to={to}>
        <View style={containerStyle}>
          <Text style={textStyle}>{text}</Text>
        </View>
      </Link>
    </TouchableOpacity>
  )
}

export const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <TopBarTab to='/' text='Meditacion'></TopBarTab>
      <TopBarTab to='/summary' text='Resumen'></TopBarTab>
      <TopBarTab to='/calendar' text='Calendario'></TopBarTab>
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 10,
    padding: 10,
    borderRadius: 10,
    margin: 20
  },
  buttonTopBar: {
    color: COLORS.white
  },
  text: {
    color: COLORS.white
  },
  textActive: {
    color: COLORS.primaryColor
  },
  active: {
    backgroundColor: COLORS.backgroundSecundary,
    color: COLORS.primaryColor,
    padding: SIZES.spacing.regular,
    borderRadius: SIZES.borderSizes.standard
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
