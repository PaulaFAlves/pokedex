import { useState, useEffect } from 'react'
import api from '../api/axios'

const usePokemons = () => {
	const [pokemons, setPokemons] = useState([])
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		const fetchPokemons = async () => {
			setIsFetching(true)

			const data = await api.get('pokemon/?limit=1050')
			const { results } = data.data
			setPokemons(results)
			setIsFetching(false)
		}
		fetchPokemons()
	}, [])

	return (
		pokemons,
		isFetching
	)
}

export default usePokemons