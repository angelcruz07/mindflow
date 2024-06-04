import React from 'react'
import { View } from 'react-native'
import { Notes } from '../../ui/notes/Notes'
import { CalendarApp } from '../../ui/calendar/Calendar'

export const CalendarPage = () => {
	return (
		<View style={styles.container}>
			<CalendarApp />
			<Notes />
		</View>
	)
}

const styles = {
	container: {
		padding: 30
	}
}
