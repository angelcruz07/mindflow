import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { COLORS, SIZES } from '@constants'

export const CalendarApp = () => {
	return (
		<View>
			<TouchableOpacity>
				<Calendar
					style={styles.containerCalendar}
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
