import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import { COLORS } from '@constants'
import { AntDesign, Entypo } from '@expo/vector-icons'

// @ts-ignore
const AppBarTab = ({ to, text, children }) => {
	const { pathname } = useLocation()
	const active = pathname === to
	const textStyles = [styles.text, active && styles.active]
	return (
		<TouchableOpacity activeOpacity={1}>
			<Link to={to}>
				<View style={styles.link}>
					{children}
					<Text style={textStyles}>{text}</Text>
				</View>
			</Link>
		</TouchableOpacity>
	)
}

export const AppBar = () => {
	return (
		<View style={styles.appBar}>
			<AppBarTab to='/' text='Inicio'>
				<Entypo name='home' size={24} color='white' />
			</AppBarTab>
			<AppBarTab to='/summary' text='Resumen'>
				<AntDesign name='filetext1' size={22} color='white' />
			</AppBarTab>
		</View>
	)
}

const styles = StyleSheet.create({
	appBar: {
		backgroundColor: COLORS.backgroundBottomBar,
		color: COLORS.white,
		height: 80,
		padding: 8,
		position: 'absolute',
		bottom: 0,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	link: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: 2
	},
	active: {
		color: COLORS.primaryColor
	},
	text: {
		color: '#fff',
		paddingHorizontal: 10
	}
})
