// Child-to-parent communication
//https://blog.devgenius.io/how-to-pass-data-from-child-to-parent-in-react-33ed99a90f43

// @flow

import * as React from 'react'
import {useState, useEffect} from 'react'
import type {ProjectProps} from './project-data'
import ProjectInfo from './ProjectInfo'
import styles from './ProjectList.module.css'
import cx from 'classnames'

const projectSelect = []

type ProjectListProps = {
   //The components takes a parameter that has datatype declared in project-data 
    projectData: ProjectProps
}

// The first "any" specifies the type of element that the React component renders: return element of any type
// The second any specifies that this component can accept props of any type.
export default function ProjectList(props: ProjectListProps): React$Element<any, any> {
    const {projectData} = props
    
    //onSelect is the index of the item being selected
    const [onSelect, setOnSelect] = useState(0);
    function selectItem(index) {
        if (onSelect != index){
            setOnSelect(index)
            // console.log(index)
        }
        // console.log(projectData[onSelect].mediaSrc)
    }

    function handleSelectState(index) {
        if (onSelect == index) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className={styles.section}>
            <h3 className={styles.section_title}>Works</h3>
            {/* <div className={styles.section_body}> */}
            <hr className={styles.section_lineBreak}/>
                <div className={styles.section_list}>
                    
                    {projectData.map((project, index) => (
                        <ProjectInfo projectInfo={project} id={index} selectItem={selectItem} onSelect={handleSelectState(index)}/> 
                    ))}
                </div>
                <img className={styles.project_thumbnail} src={projectData[onSelect].mediaSrc}/>
            {/* </div> */}
        </div>
    )
}
