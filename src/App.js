import React from 'react'
import PokemonsProvider from './provider/PokemonsProvider'

import './assets/App.css'
import Home from './components/Home';
import PokemonsList from './components/PokemonsList';

function App() {
  return (
    <PokemonsProvider>
      <Home />
    </PokemonsProvider>
  );
}

export default App;
