import React from 'react'
import RecipeCard from './RecipeCard'
import {RECIPE_LIST} from './RecipeCard/recipe-data.js'

import Header from './Header'

function App() {
  return (
    <div>
      <Header></Header>
      {/* <img src={}></img>   */}
      <div>
        {RECIPE_LIST.map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default App