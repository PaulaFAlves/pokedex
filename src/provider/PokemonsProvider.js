import React from 'react'
import usePokemons from '../hooks/usePokemons'
import useTypes from '../hooks/useTypes'

export const PokemonsContext = React.createContext()

const PokemonsProvider = ({ children }) => {
	const pokemons = usePokemons()
	const types =  useTypes()

	return (
		<PokemonsContext.Provider value={{ pokemons, types }}>
			{children}
		</PokemonsContext.Provider>
	)
}

export default PokemonsProvider
