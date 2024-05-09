import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { CalendarList } from 'react-native-calendars'
import * as Calendar from 'expo-calendar'

export function App() {
	const [events, setEvents] = useState<{
		[calendarTitle: string]: Calendar.Event[]
	}>({})
	const [permissionStatus, setPermissionStatus] =
		useState<Calendar.PermissionStatus | null>(null)

	useEffect(() => {
		// Solicitar permisos de calendario al cargar la aplicación
		const requestCalendarPermissions = async () => {
			const { status } = await Calendar.requestCalendarPermissionsAsync()
			setPermissionStatus(status)
		}

		requestCalendarPermissions()
	}, [])

	useEffect(() => {
		if (permissionStatus === 'granted') {
			loadCalendarEvents()
		}
	}, [permissionStatus])

	const loadCalendarEvents = async () => {
		const calendars = await Calendar.getCalendarsAsync()
		const newEvents: { [calendarTitle: string]: Calendar.Event[] } = {}
		const startDate = new Date()
		const endDate = new Date()
		endDate.setMonth(endDate.getMonth() + 1) // Obtener eventos del próximo mes

		for (const calendar of calendars) {
			const calendarEvents = await Calendar.getEventsAsync(
				[calendar.id],
				startDate,
				endDate
			)
			newEvents[calendar.title] = calendarEvents
		}
		setEvents(newEvents)
	}

	return (
		<View style={styles.container}>
			<CalendarList
				current={'2024-05-07'} // fecha actual
				pastScrollRange={50}
				futureScrollRange={50}
				horizontal
				pagingEnabled
				// markedDates={events} // marcado de eventos
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		paddingTop: 50
	}
})
