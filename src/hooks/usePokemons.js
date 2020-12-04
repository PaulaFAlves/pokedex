import { useState, useEffect } from 'react'
import api from '../api/axios'

const usePokemons = () => {
	const [pokemons, setPokemons] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	const [types, setTypes] = useState([])

	useEffect(() => {
		setIsFetching(true)

		const fetchPokemons = async () => {

			const data = await api.get('pokemon/?limit=1050')
			const { results } = data.data
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