// Child-to-parent communication
//https://blog.devgenius.io/how-to-pass-data-from-child-to-parent-in-react-33ed99a90f43

// @flow

import * as React from 'react'
import {useState, useEffect, useRef} from 'react'
import type {ProjectProps} from './project-data'
import ProjectInfo from './ProjectInfo'
import styles from './ProjectList.module.css'
import cx from 'classnames'
import "bootstrap-icons/font/bootstrap-icons.css"
import {ImageBackground} from 'react-native'
import CursorBkg from '../CursorBkg'



type ProjectListProps = {
   //The components takes a parameter that has datatype declared in project-data 
    projectData: ProjectProps
}

// The first "any" specifies the type of element that the React component renders: return element of any type
// The second any specifies that this component can accept props of any type.
export default function ProjectList(props: ProjectListProps): React$Element<any, any> {
    const {projectData} = props
    //onSelect is the index of the item being selected
    const [onSelect, setOnSelect] = useState(0)
    const [elementMaxHeight, setElementMaxHeight] = useState(0)

    const frostedEle1 = useRef(null)
    const [frostedEle1Pos, setFrostedEle1Pos] = useState([0,0])

    // window.addEventListener('resize', () => {
    //     // debugger;
    //     console.log(frostedEle1)

    //     // if (getElementPos(frostedEle1) !== null) {
    //     //     setFrostedEle1Pos(getElementPos(frostedEle1))
    //     // }
    // })
        
    useEffect(() => {
        console.log(frostedEle1Pos)
        if (frostedEle1Pos == getElementPos(frostedEle1)){
        setFrostedEle1Pos(getElementPos(frostedEle1));
        
    }
    }, [frostedEle1Pos]);
      
    function getElementPos(div) {
        console.log(div.current.getBoundingClientRect().x)
        if (div.current === null) {
            return [0, 0]
        }
        return [div.current.getBoundingClientRect().x, div.current.getBoundingClientRect().y]
        
        // returns an array that describes the offset
    }

    function selectItem(index) {
        if (onSelect !== index){
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

    // function returnTallest(refArray){
    //     var maxHeight = 0;
    //     refArray.map((ref, index) => (
    //         console.log(ref.current.offsetHeight)
    //         // ref.clientHeight > maxHeight && {
    //         //     ...maxHeight = ref.clientHeight
    //         // }
    //     ))
    //     return maxHeight
    //     // return Math.max(refArray)
    // }

    // set all listItems' height to the tallest one
    // useEffect(() => {
    //     if (listItemRef.current) {
    //         console.log(listItemRef[1])
    //     }
       
    //     // console.log(returnTallest(listItemRef))
    //     // setElementHeight(returnTallest())
    //     // setWidth()
    // })

    return (
        <div className={styles.section}>
            <h3 className={styles.section_title}>
                <div className={styles.titleIcon}>
                <i class="bi bi-binoculars-fill"></i>
                </div>
                Works
            </h3>
            <div className={styles.section_body}>
                
                <div ref={frostedEle1}
                className={`${styles.section_list} ${styles.grid_crosshair}`}>

                {/* <CursorBkg offsetX={frostedEle1Pos[0]} offsetY={frostedEle1Pos[1]}/> */}
                    
                    {projectData.map((project, index) => (
                        <ProjectInfo 
                        // listItemRef={listItemRef}
                        projectInfo={project} 
                        listSize={projectData.length} 
                        id={index} 
                        selectItem={selectItem}
                        onSelect={handleSelectState(index)}/> 
                    ))}
                    
                </div>
                <center className={styles.project_imgDisplay} >
                    <div className={styles.project_bkg} style={{backgroundImage: `url(${projectData[onSelect].mediaSrc})`}}></div>
                    <img className={styles.project_thumbnail} src={projectData[onSelect].mediaSrc}/>
                </center>
            </div>
        </div>
    )
}
