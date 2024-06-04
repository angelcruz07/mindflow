import React from 'react'
import {
	Fontisto,
	MaterialCommunityIcons,
	Ionicons,
	FontAwesome5
} from '@expo/vector-icons'

interface Mood {
	id: number
	name: string
	icon?: JSX.Element
	timer: number
}

export const MOOD: Mood[] = [
	{
		id: 1,
		name: 'Todos',
		icon: <Fontisto name='fire' size={20} color='#40C794' />,
		timer: 5
	},
	{
		id: 2,
		name: 'Dormir',
		icon: <MaterialCommunityIcons name='bed' size={20} color='#40C794' />,
		timer: 600
	},
	{
		id: 3,
		name: 'Relajarse',
		icon: <FontAwesome5 name='kiss' size={20} color='#40C794' />,
		timer: 900
	},
	{
		id: 4,
		name: 'Feliz',
		icon: <Ionicons name='happy-outline' size={20} color='#40C794' />,
		timer: 300
	},
	{
		id: 5,
		name: 'Cansado',
		icon: <FontAwesome5 name='tired' size={20} color='#40C794' />,
		timer: 600
	}
]
