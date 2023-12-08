import React from 'react'
import {useState, useEffect, useRef} from 'react'
import styles from './ProjectList.module.css'
import cx from 'classnames'
import type {ProjectProps} from './project-data'
import index from './index'


export default function ProjectInfo(props): React$Element<any, any> {
    const {projectInfo, listSize, selectItem, id, onSelect} = props

    //useState for hover
    const [onHoverState, setOnHoverState] = useState(false)

    function handleMouseOver(index) {
        selectItem(index)
        setOnHoverState(true)
        // console.log(onHoverState)
    }

    function handleMouseOut(index) {
        setOnHoverState(false)
    }


    return (
        //[styles.onHover] is key, : means association
        <>
        <div 
            // ref={(element) => listItemRef.current[id] = element}
            onMouseEnter={() => handleMouseOver(id)}
            onMouseLeave={() => handleMouseOut(id)}
            className={cx(styles.project_listItem, 
                        {[styles.onHover]: onHoverState}, 
                        {[styles.onSelect]: onSelect})}>

            <ul className={styles.project_description}>
                <span className={styles.project_title}>{projectInfo.title}</span>
                <span className={styles.project_subtitle}>{projectInfo.description}</span>
            </ul>
            
            <p className={styles.project_type}>
                {projectInfo.type}
            </p>

            {/* <CursorBkg /> */}
        </div>
        {id < listSize - 1 &&
            <hr className={styles.divider}/>
        }
        
        </>
    )
}