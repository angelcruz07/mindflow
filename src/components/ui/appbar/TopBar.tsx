import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '@constants'
import { useLocation, Link } from 'react-router-native'

// @ts-ignore
const TopBarTab = ({ to, text }) => {
	const { pathname } = useLocation()
	const active = pathname === to
	const textStyles = [
		styles.text,
		active && styles.active,
		active && styles.textActive
	]

	return (
		<TouchableOpacity activeOpacity={1}>
			<Link to={to}>
				<View style={textStyles}>
					<Text style={styles.text}>{text}</Text>
				</View>
			</Link>
		</TouchableOpacity>
	)
}

export const TopBar = () => {
	return (
		<View style={styles.topBar}>
			<TopBarTab to='/' text='Meditacion'></TopBarTab>
			<TopBarTab to='/resumen' text='Resumen'></TopBarTab>
			<TopBarTab to='/calendar' text='Calendario'></TopBarTab>
		</View>
	)
}

// TODO: Crear la interfaz del top bar
const styles = StyleSheet.create({
	topBar: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
		backgroundColor: COLORS.backgroundSecundary,
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
		padding: 10,
		borderRadius: 10
	},
	link: {
		alignItems: 'center',
		justifyContent: 'center'
	}
})
