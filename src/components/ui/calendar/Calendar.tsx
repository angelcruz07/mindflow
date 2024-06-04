import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { COLORS, SIZES } from '@constants'
import { useContext } from 'react'
import { MeditationContext } from '../../../context/MeditationContext'

export const CalendarApp = () => {
	const context = useContext(MeditationContext)

	if (!context) {
		throw new Error('Timer must be used within a MeditationProvider')
	}

	const { meditationFinished, setMeditationFinished } = context

	const today = new Date()
	const dateString = `${today.getFullYear()}-${String(
		today.getMonth() + 1
	).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

	const markedDates = {
		...(meditationFinished && {
			[dateString]: {
				marked: true,
				color: '#20463B',
				textColor: 'white',
				customStyles: {
					container: {
						borderRadius: 10
					}
				}
			}
		})
	}

	return (
		<View>
			<TouchableOpacity>
				<Calendar
					style={styles.containerCalendar}
					minDate='2023-02-26'
					markingType={'period'}
					markedDates={markedDates}
					theme={{
						calendarBackground: 'transparent',
						textSectionTitleColor: COLORS.primaryColor,
						textSectionTitleDisabledColor: COLORS.white,
						selectedDayBackgroundColor: COLORS.primaryColor,
						selectedDayTextColor: COLORS.white,
						todayTextColor: COLORS.primaryColor,
						dayTextColor: COLORS.white,
						textDisabledColor: COLORS.disableColor,
						dotColor: COLORS.white,
						selectedDotColor: COLORS.white,
						arrowColor: COLORS.white,
						disabledArrowColor: COLORS.white,
						monthTextColor: COLORS.white,
						indicatorColor: COLORS.primaryColor,
						textDayFontFamily: 'monospace',
						textMonthFontFamily: 'monospace',
						textDayHeaderFontFamily: 'monospace',
						textDayFontWeight: '300',
						textMonthFontWeight: 'bold',
						textDayHeaderFontWeight: '300',
						textDayFontSize: SIZES.fontSizes.regular,
						textMonthFontSize: SIZES.fontSizes.regular,
						textDayHeaderFontSize: 16
					}}
					onDayPress={(day) => {
						console.log('selected day', day)
					}}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	containerCalendar: {
		padding: 5
	}
})
