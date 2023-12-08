import React from 'react'
import RecipeCard from './RecipeCard'
import {RECIPE_LIST} from './RecipeCard/recipe-data'
import './styles/global.css'

import ProjectList from './ProjectList'
import {PROJECT_INFO_LIST} from './ProjectList/project-data'


//we're importing the datatype here, so here is where we need to check datatype

function App() {
  return (
    // <div style={{display: 'flex', flexWrap: 'wrap'}}>
    //   {RECIPE_LIST.map((recipe, index) => (
    //     <RecipeCard recipe={recipe} />
    //   ))}
    // </div>
    <div>
      {PROJECT_INFO_LIST.map((project, index) => (
        <span><ProjectList project/></span>
      ))}
    </div>
  )
}

export default App
