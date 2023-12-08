import React from 'react'
import styles from './RecipeCard.module.css'

export default function RecipeImg(props) {
  return (
    <img
      src={props.imgSrc}
      alt="instant noodle served with chocolate - yes you read that right"
      className={styles.recipe_img}
    />
  )
}