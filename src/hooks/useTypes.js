import { useState, useEffect } from 'react'
import api from '../api/axios'

const useTypes = () => {
	const [types, setTypes] = useState([])

	useEffect(() => {
		const fetchTypes = async () => {
			const data = await api.get('type')
			const { results } = data.data
			setTypes(results)
		}
		fetchTypes()
	}, [])

	return (
		types
	)
}

export default useTypes