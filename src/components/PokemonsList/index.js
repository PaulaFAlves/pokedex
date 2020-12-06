import React, { useContext } from 'react'
import { PokemonsContext } from '../../provider/PokemonsProvider'

const PokemonsList = () => {
	const { pokemons} = useContext(PokemonsContext)

	return (
		<div >
			<div className="pokemon-container">
				{
					pokemons && 
					pokemons.map((pokemon, index) => (
						<a href="#" className="pokemon-card" key={index}>
							{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
						</a>
					))
				}
			</div>
		</div>
	)
}

export default PokemonsList