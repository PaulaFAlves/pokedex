import React, { useContext, useEffect, useState } from 'react'
import { PokemonsContext } from '../../provider/PokemonsProvider'
import { Link } from 'react-router-dom'

const PokemonsList = ({ watch }) => {
	const { pokemons } = useContext(PokemonsContext)
	const [pokemonsFiltered, setPokemonsFiltered] = useState([])
	const search = watch('search')

	useEffect(() => {
		setPokemonsFiltered(pokemons)
		if (search) {
			const filtered = pokemonsFiltered.filter((pokemon) => pokemon.name.includes(search))
			setPokemonsFiltered(filtered)
		}
	}, [pokemons, search])

	return (
		<div >
			<div className="pokemon-container">
				{
					pokemonsFiltered &&
					pokemonsFiltered.map((pokemon, index) => (
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
