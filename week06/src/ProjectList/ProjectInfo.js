import React from 'react'
import styles from './ProjectList.module.css'
import cx from 'classnames'

 
export default function ProjectInfo(props) {
    const {title, description, type} = props

    return (
        <div className={styles.project_list}>
            <li>
                <span>{title}</span>
                <span>{description}</span>
            </li>
            
            <p>
                {type}
            </p>
        </div>
    )
}