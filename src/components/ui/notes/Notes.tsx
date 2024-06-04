import { useState, useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput
} from 'react-native'
import { COLORS } from '@constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Note {
	id: number
	content: string
}

export const Notes = () => {
	const [notes, setNotes] = useState<Note[]>([])
	const [isFormVisible, setFormVisible] = useState(false)
	const [newNoteContent, setNewNoteContent] = useState('')

	useEffect(() => {
		loadNotes()
	}, [])

	const loadNotes = async () => {
		try {
			const storedNotes = await AsyncStorage.getItem('notes')
			if (storedNotes !== null) {
				setNotes(JSON.parse(storedNotes))
			}
		} catch (error) {
			console.log(error)
		}
	}

	const saveNotes = async (notesToSave: Note[]) => {
		try {
			await AsyncStorage.setItem('notes', JSON.stringify(notesToSave))
		} catch (error) {
			console.log(error)
		}
	}

	const deleteNote = (id: number) => {
		setNotes((prevNotes) => {
			const newNotes = prevNotes.filter((note) => note.id !== id)
			saveNotes(newNotes)
			return newNotes
		})
	}

	const addNote = () => {
		const newNote: Note = { id: notes.length, content: newNoteContent }
		setNotes((prevNotes) => {
			const updatedNotes = [...prevNotes, newNote]
			saveNotes(updatedNotes)
			return updatedNotes
		})
		setNewNoteContent('')
		setFormVisible(false)
	}

	return (
		<View style={styles.containter}>
			<Text style={styles.subtitle}>Pensamientos:</Text>
			<View style={styles.containerNotes}>
				{notes.map((note) => (
					<TouchableOpacity key={note.id} onPress={() => deleteNote(note.id)}>
						<View key={note.id} style={styles.cardNote}>
							<Text style={styles.textNote}>{note.content}</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
			{isFormVisible && (
				<View>
					<TextInput
						style={styles.inputNote}
						value={newNoteContent}
						onChangeText={setNewNoteContent}
						placeholder='Escribe tu pensamiento...'
					/>
					<TouchableOpacity onPress={addNote}>
						<Text style={styles.buttonAddNote}>Agregar nota</Text>
					</TouchableOpacity>
				</View>
			)}
			{!isFormVisible && (
				<TouchableOpacity onPress={() => setFormVisible(true)}>
					<Text style={styles.buttonAddNote}>Agregar pensamiento +</Text>
				</TouchableOpacity>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	containter: {
		paddingBottom: 100
	},
	containerNotes: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: 20
	},
	cardNote: {
		backgroundColor: COLORS.colorNote,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: 160,
		height: 140,
		borderRadius: 10,
		padding: 10,
		marginBottom: 10
	},
	textNote: {
		color: COLORS.white,
		fontSize: 15
	},
	subtitle: {
		color: COLORS.white,
		fontSize: 20,
		fontWeight: '600'
	},
	inputNote: {
		color: COLORS.white
	},
	buttonAddNote: {
		marginTop: 20,
		color: COLORS.primaryColor,
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'center',
		borderWidth: 1,
		borderColor: COLORS.white,
		padding: 10,
		borderRadius: 10
	}
})
