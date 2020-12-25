import React, { useContext } from 'react'
import { PokemonsContext } from '../../provider/PokemonsProvider'
import { Link } from 'react-router-dom'

import PokemonsList from '../PokemonsList'

import '../../assets/App.css'

const Home = () => {
	const { types } = useContext(PokemonsContext)

	return (
		<div>
			<div className="header">
				<h2>Pokedex</h2>
				<input className="search" type="text" placeholder="Search" aria-label="Search" />
				<nav className="types-menu">
					{
						types &&
						types.map((type, index) => (
							<Link to="/" key={index}>
								{`${type.name[0].toUpperCase()}${type.name.slice(1)}`}
							</Link>
						))
					}
				</nav>
			</div>
			<div className="content" id="#style-2">
				<PokemonsList />
			</div>
		</div>
	)
}

export default Home
