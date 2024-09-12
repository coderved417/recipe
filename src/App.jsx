import React from 'react'
import Home from './Home'
import About from './About'
import PNF from './PNF'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Counter from './Counter'
import Navbar from './components/Navbar'
import Expense from './pages/Expense'
import ConditionalRendri from './pages/ConditionalRendri'
import EffectShow from './pages/EffectShow'
import TrailApi from './components/TrailApi'
import Recipe from './pages/Recipe'
import ViewRecipe from './pages/ViewRecipe'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/Home'element={<Home/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/*'element={<PNF/>}/>
        <Route path='/Counter'element={<Counter/>}/>
          <Route path='/Expense'element={<Expense/>}/>
          <Route path='/Conditional' element={<ConditionalRendri/>}/>
          <Route path='/Effect' element={<EffectShow/>}/>
          <Route path='/Trail' element={<TrailApi/>}/>
          <Route path='/Recipe' element={<Recipe/>}/>

          <Route path='/View' element={<ViewRecipe/>}/>



      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
