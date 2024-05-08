import React from 'react'
import { View, Text } from 'react-native'
import { Notes } from '../../ui/notes/Notes'

export const CalendarPage = () => {
	return (
		<View style={styles.container}>
			<Text>Calendar</Text>
			<Notes />
		</View>
	)
}

const styles = {
	container: {
		padding: 30
	}
}
