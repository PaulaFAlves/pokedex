import { useState, useEffect } from 'react'
import api from '../api/axios'

const usePokemons = () => {
	const [pokemons, setPokemons] = useState([])
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		setIsFetching(true)

		const fetchPokemons = async () => {

			const data = await api.get('pokemon/?limit=1050')
			const { results } = data.data

			const pokemonsList = results.map((p) => {
				const pokemonInfo = {}
				fetch(p.url).then(res => res.json()).then(data => {
					pokemonInfo.name = p.name
					pokemonInfo.id = data.id
					pokemonInfo.types = data.types
				})
				return pokemonInfo
			})
			setPokemons(results)
		}
		fetchPokemons()
		setIsFetching(false)
	}, [])

	if (isFetching) {
		return <p>Loading...</p>
	}

	return (
		isFetching,
		pokemons
	)
}

export default usePokemons
