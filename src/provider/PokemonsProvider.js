import React from 'react'
import usePokemons from '../hooks/usePokemons'

export const PokemonsContext = React.createContext()

const PokemonsProvider = ({ children }) => {
	const {
		pokemons,
		isFetching
	} = usePokemons()
	return (
		<PokemonsContext.Provider value={{ pokemons, isFetching }}>
			{children}
		</PokemonsContext.Provider>
	)
}

export default PokemonsProvider
