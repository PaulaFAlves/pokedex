import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { PokemonsContext } from '../../provider/PokemonsProvider'
import { Link } from 'react-router-dom'

import PokemonsList from '../PokemonsList'
import chart from '../../assets/images/chart.png'

import '../../assets/App.css'

const Home = () => {
	const { register, watch } = useForm()
	const { types, pokemons } = useContext(PokemonsContext)

	return (
		<div className="main-container">
			<div className="header">
				<h2>Pokedex</h2>
				<form className="header-options">
					<input
						className="search"
						type="text"
						placeholder="Search"
						name="search"
						ref={register}
						autoComplete="off"
					/>
					{
						pokemons
						&& (
							<Link to="/chart" className="links"><img src={chart} alt="Chart" title="Chart" /></Link>
						)
					}
				</form>
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
				{
					pokemons
					&& (
						<PokemonsList
							watch={watch}
							pokemons={pokemons}
						/>
					)
				}

			</div>
			<div className="footer">
				<div className="footer-text">
					Developed by Paula Alves
				</div>
			</div>
		</div>
	)
}

export default Home
