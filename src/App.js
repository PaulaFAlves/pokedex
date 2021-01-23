import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PokemonsProvider from './provider/PokemonsProvider'

import './assets/App.css'
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import Chart from './components/Chart';

function App() {
  return (
    <Router>
      <Switch>
        <PokemonsProvider>
          <Route path="/" exact component={Home} />
          <Route path="/pokemon" component={PokemonDetail} />
          <Route path="/chart" component={Chart} />
        </PokemonsProvider>
      </Switch>
    </Router>
  );
}

export default App;
