import React from 'react'
import RecipeCard from './RecipeCard'
import {RECIPE_LIST} from './RecipeCard/recipe-data'
import './styles/global.css'

//we're importing the datatype here, so here is where we need to check datatype

function App() {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {RECIPE_LIST.map((recipe, index) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  )
}

export default App
