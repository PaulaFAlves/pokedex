import React, { useContext, useEffect, useState } from 'react'
import { PokemonsContext } from '../../provider/PokemonsProvider'
import { XAxis, YAxis, CartesianGrid, Tooltip, Bar, LabelList, BarChart } from 'recharts';

const Chart = () => {
  const { pokemons } = useContext(PokemonsContext)
  const [list, setList] = useState()

  const types = [
    { name: 'normal', value: 10 },
    { name: 'fighti', value: 22 },
    { name: 'flyin', value: 3 },
    { name: 'poiso', value: 7 },
    { name: 'groun', value: 10 },
    { name: 'rock', value: 22 },
    { name: 'bug', value: 3 },
    { name: 'ghost', value: 7 },
    { name: 'steel', value: 10 },
    { name: 'fire', value: 22 },
    { name: 'water', value: 3 },
    { name: 'grass', value: 7 },
    { name: 'electr', value: 10 },
    { name: 'psychi', value: 22 },
    { name: 'ice', value: 3 },
    { name: 'dragon', value: 7 },
    { name: 'dark', value: 10 },
    { name: 'fairy', value: 22 },
    { name: 'shadow', value: 3 },
    { name: 'unknwon', value: 7 },
  ]

  useEffect(() => {
    setList(pokemons)
    let typesList = []
    if (list) {
      list.map((pokemon) => pokemon.types.map((t) => {
        typesList.push(t.type.name)
      }))
      let count = {}
      typesList.forEach(function (i) { count[i] = (count[i] || 0) + 1; })
    }
  }, [pokemons])

  const backButton = () => {
    window.history.back()
  }

  return (
    <div className="main-container">
      <div className="header">
        <h2>Pokedex</h2>
        <button type="button" onClick={backButton} className="basic-button">Back</button>
      </div>
      <div className="graph-container">
        <BarChart
          width={1000}
          height={500}
          data={types}
          margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis padding={{ left: 50, right: 50 }} scale="point" hide={true} />
          <YAxis />
          <Bar dataKey="value" fill="gray" >
            <LabelList dataKey="name" position="top" angle="-45" fill="#fff" fontSize={18} />
          </Bar>
          <Tooltip />
        </BarChart>
      </div>
    </div>
  )
}

export default Chart
