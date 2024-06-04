import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'

export const CalendarApp = () => {
	return (
		<View>
			<TouchableOpacity>
				<Calendar
					style={styles.containerCalendar}
					theme={{
						backgroundColor: 'transparent',
						calendarBackground: 'rgba(89, 89, 89, 0.3)',
						textSectionTitleColor: '#09F8BC',
						textSectionTitleDisabledColor: '#d9e1e8',
						selectedDayBackgroundColor: '#09F8BC',
						selectedDayTextColor: '#ffffff',
						todayTextColor: '#09F8BC',
						dayTextColor: '#fff',
						textDisabledColor: '#615C5C',
						dotColor: '#fff',
						selectedDotColor: '#ffffff',
						arrowColor: '#fff',
						disabledArrowColor: '#d9e1e8',
						monthTextColor: '#fff',
						indicatorColor: 'blue',
						textDayFontFamily: 'monospace',
						textMonthFontFamily: 'monospace',
						textDayHeaderFontFamily: 'monospace',
						textDayFontWeight: '300',
						textMonthFontWeight: 'bold',
						textDayHeaderFontWeight: '300',
						textDayFontSize: 16,
						textMonthFontSize: 16,
						textDayHeaderFontSize: 16
					}}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	containerCalendar: {
		borderRadius: 10,
		padding: 5
	}
})
