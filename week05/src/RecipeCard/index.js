// @flow

import * as React from 'react'
import Card from './Card'
import RecipeInfo from './RecipeInfo'
import RecipeImg from './RecipeImg'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import UserRating from './UserRating'
import styles from './RecipeCard.module.css'

import type {RecipeProps} from './recipe-data'

type Props = {
  /* some prop description inserted here to explain what this is during hand-off */
  recipe: RecipeProps,
}

//this means that the function RecipeCard takes a parameter of Props type, and returns two react elements
export default function RecipeCard(props: Props): React$Element<any, any> {
  const {recipe} = props
  return (
    <Card>
      <RecipeImg imgSrc={recipe.imgSrc} />
      <div class={styles.recipe_wrapper}>
        <RecipeInfo title={recipe.title} description={recipe.description} />
        <div class={styles.recipe_details}>
          <IngredientsList ingredients={recipe.ingredients} />
          <InstructionsList instructions={recipe.instructions} />
        </div>

        <UserRating />
      </div>
    </Card>
  )
}
