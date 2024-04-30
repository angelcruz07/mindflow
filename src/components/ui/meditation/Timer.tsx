import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES } from '@constants'
import { MOOD } from 'data'
import { useState, useEffect } from 'react'
import { StylesTimer } from 'types'

export const Timer = () => {
	const [timer, setTimer] = useState(5)
	const [isActive, setIsActive] = useState(false)
	const [isPaused, setIsPaused] = useState(false)

	useEffect(() => {
		let intervalId: ReturnType<typeof setInterval>

		if (isActive && !isPaused) {
			intervalId = setInterval(() => {
				setTimer((timer) => timer - 1)
			}, 1000)
		}

		return () => {
			clearInterval(intervalId)
		}
	}, [isActive, isPaused])

	const handleStart = () => {
		setIsActive(true)
		setIsPaused(false)
	}
	const handlePause = () => {
		setIsPaused(true)
	}
	const handleReset = () => {
		setIsActive(false)
		setIsPaused(false)
		setTimer(0)
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.timer}>
				<LinearGradient
					colors={['rgba(64,199,148,1)', 'rgba(5,41,31,1)']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={styles.gradient}>
					<Text style={styles.text}>{timer}</Text>
				</LinearGradient>
			</TouchableOpacity>
			<View style={styles.playContainer}>
				<TouchableOpacity style={styles.playButton} onPress={handleStart}>
					<Image source={require('@images/play.webp')} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.playButton} onPress={handlePause}>
					<Image source={require('@images/stop.webp')} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.playButton} onPress={handleReset}>
					<Image source={require('@images/reset.webp')} />
				</TouchableOpacity>
			</View>

			<Text style={{ color: '#fff', marginTop: 15 }}>Selecciona tu mood</Text>

			{/* Todo: Agregar los iconos y mejorar el diseño*/}
			<View style={styles.mood}>
				{MOOD.map((mood, index) => {
					return (
						<View key={index} style={styles.moodContainer}>
							<TouchableOpacity style={styles.moodButton} key={mood.id}>
								<Image source={mood.img} width={20} height={20} />
							</TouchableOpacity>
							<Text style={styles.moodText}>{mood.name}</Text>
						</View>
					)
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create<StylesTimer>({
	container: {
		alignItems: 'center'
	},
	mood: {
		flexDirection: 'row',
		gap: 15,
		margin: 15,
		backgroundColor: COLORS.backgroundSecundary,
		padding: SIZES.spacing.large,
		borderRadius: SIZES.borderSizes.standard,
		justifyContent: 'center',
		alignItems: 'center'
	},
	moodContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	moodButton: {
		backgroundColor: COLORS.backgroundSecundary,
		padding: 10,
		borderRadius: 30,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: 65
	},
	moodText: {
		color: '#fff',
		fontSize: 10
	},
	timer: {
		height: 200,
		width: 200,
		shadowOffset: {
			width: 0,
			height: 10
		},
		shadowColor: '#000',
		shadowOpacity: 0.25,
		shadowRadius: 3.84
	},
	playContainer: {
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		gap: 20
	},
	playButton: {
		alignItems: 'center',
		backgroundColor: COLORS.backgroundSecundary,
		borderRadius: 50,
		height: 60,
		justifyContent: 'center',
		width: 60
	},
	text: {
		color: COLORS.white,
		fontWeight: 'bold',
		fontSize: 28
	},
	gradient: {
		alignItems: 'center',
		borderRadius: 1000,
		flex: 1,
		justifyContent: 'center',
		width: 200
	}
})
