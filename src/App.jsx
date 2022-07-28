import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './componentes/Home'
import Pokedex from './componentes/Pokedex'
import PokemonDetail from './componentes/PokemonDetail'
import ProtectedRoutes from './componentes/ProtectedRoutes'
import Setting from './componentes/Setting'
import pokeRotate from './images/pokeRotate.png'

function App() {

  return (
    <div>
      <HashRouter>
      <img className="pokebola" src={pokeRotate}></img>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route element={<ProtectedRoutes />}>
              <Route path='/pokedex' element={<Pokedex />}/>
              <Route path='/pokedex/:id' element={<PokemonDetail />}/>
              <Route path='/pokedex/setting' element={<Setting />} />
          </Route>
  
        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
