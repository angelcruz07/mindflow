import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Notes = () => {
	return (
		<View style={styles.container}>
			<Text>Pensamientos:</Text>
			<View></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	containerNotes: {}
})
