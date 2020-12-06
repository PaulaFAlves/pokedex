import React, { useContext } from 'react'
import { PokemonsContext } from '../../provider/PokemonsProvider'

const PokemonsList = () => {
	const { pokemons} = useContext(PokemonsContext)

	return (
		<div >
			<div className="pokemon-container">
				{
					pokemons && 
					pokemons.map((pokemon) => (
						<a href="#" className="pokemon-card">{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}</a>
					))
				}
			</div>
			<div>teste</div>
		</div>
	)
}

export default PokemonsList