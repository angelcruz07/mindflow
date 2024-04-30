import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES } from '@constants'
import { MOOD } from 'data'
import { useState, useEffect } from 'react'
import { StylesTimer } from 'types'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
interface Mood {
	timer: number
}

export const Timer = () => {
	// Todo: Agregar sonido a las meditaciones
	const [meditationTime, setMeditationTime] = useState<number | null>(null)
	const [timer, setTimer] = useState(0)
	const [isActive, setIsActive] = useState(false)
	const [isPaused, setIsPaused] = useState(false)

	const handleMoodPress = (mood: Mood) => {
		setMeditationTime(mood.timer)
		setTimer(mood.timer)
	}

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

	const handleToggleTimer = () => {
		if (isActive) {
			setIsActive(false)
			setIsPaused(false)
		} else {
			setIsActive(true)
			setIsPaused(false)
		}
	}
	const handleReset = () => {
		setIsActive(false)
		setIsPaused(false)
		if (meditationTime !== null) {
			setTimer(meditationTime)
		}
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.timer}>
				<LinearGradient
					colors={['rgba(64,199,148,1)', 'rgba(5,41,31,1)']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={styles.gradient}>
					<Text style={styles.text}>
						{Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}
						{timer % 60}
					</Text>
				</LinearGradient>
			</TouchableOpacity>
			<View style={styles.playContainer}>
				<TouchableOpacity style={styles.playButton} onPress={handleToggleTimer}>
					{isActive ? (
						<AntDesign name='pause' size={35} color='#595959' />
					) : (
						<Ionicons name='play-circle-sharp' size={45} color='#595959' />
					)}
				</TouchableOpacity>
				<TouchableOpacity style={styles.playButton} onPress={handleReset}>
					<AntDesign name='reload1' size={30} color='#595959' />
				</TouchableOpacity>
			</View>

			<View style={styles.moodContainer}>
				<Text style={{ color: '#fff' }}>Selecciona tu mood</Text>
				<View style={styles.mood}>
					{MOOD.map((mood, index) => {
						return (
							<View key={index} style={styles.moodContainerButton}>
								<TouchableOpacity
									style={styles.moodButton}
									key={mood.id}
									onPress={() => handleMoodPress(mood)}>
									<Image source={mood.img} width={20} height={20} />
								</TouchableOpacity>
								<Text style={styles.moodText}>{mood.name}</Text>
							</View>
						)
					})}
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create<StylesTimer>({
	container: {
		alignItems: 'center',
		marginTop: 80
	},
	moodContainer: {
		marginTop: 40,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 15
	},
	mood: {
		flexDirection: 'row',
		gap: 15,
		backgroundColor: COLORS.backgroundSecundary,
		padding: SIZES.spacing.large,
		borderRadius: SIZES.borderSizes.standard,
		justifyContent: 'center',
		alignItems: 'center'
	},
	moodContainerButton: {
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
