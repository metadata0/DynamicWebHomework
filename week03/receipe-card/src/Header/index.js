import React from 'react'
import styles from './Header.module.css'
import background from '../assets/gross-food.jpg'

export default function Header() {
    return (
        <div className={styles.headerBg}>
            <div className={styles.title}>
            My Favourite Recipes
            </div>
        </div>
    )
}
