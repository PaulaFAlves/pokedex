import React, { useContext } from 'react'
import { PokemonsContext } from '../../provider/PokemonsProvider'
import { Link } from 'react-router-dom'

const PokemonsList = () => {
	const { pokemons } = useContext(PokemonsContext)

	return (
		<div >
			<div className="pokemon-container">
				{
					pokemons &&
					pokemons.map((pokemon, index) => (
						<Link to="/pokemon" className="pokemon-card" key={index}>
							{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
						</Link>
					))
				}
			</div>
		</div>
	)
}

export default PokemonsList
