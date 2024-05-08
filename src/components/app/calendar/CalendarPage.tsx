import React from 'react'
import { View } from 'react-native'
import { Notes } from '../../ui/notes/Notes'
import { Calendar } from '../../ui/calendar/Calendar'

export const CalendarPage = () => {
	return (
		<View style={styles.container}>
			<Calendar />
			<Notes />
		</View>
	)
}

const styles = {
	container: {
		padding: 30
	}
}
