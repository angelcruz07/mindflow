import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface MeditationContextProps {
	meditationFinished: boolean
	setMeditationFinished: React.Dispatch<React.SetStateAction<boolean>>
}

export const MeditationContext = createContext<
	MeditationContextProps | undefined
>(undefined)

interface MeditationProviderProps {
	children: React.ReactNode
}

export const MeditationProvider = ({ children }: MeditationProviderProps) => {
	const [meditationFinished, setMeditationFinished] = useState(false)

	useEffect(() => {
		// Recuperar el estado guardado cuando la aplicación se inicie
		const loadMeditationFinished = async () => {
			const savedMeditationFinished = await AsyncStorage.getItem(
				'meditationFinished'
			)
			if (savedMeditationFinished !== null) {
				setMeditationFinished(JSON.parse(savedMeditationFinished))
			}
		}

		loadMeditationFinished()
	}, [])

	useEffect(() => {
		// Guardar el estado cuando cambie
		AsyncStorage.setItem(
			'meditationFinished',
			JSON.stringify(meditationFinished)
		)
	}, [meditationFinished])

	return (
		<MeditationContext.Provider
			value={{ meditationFinished, setMeditationFinished }}>
			{children}
		</MeditationContext.Provider>
	)
}
