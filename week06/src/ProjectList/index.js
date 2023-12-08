// @flow

import * as React from 'react'
import {useState, useEffect} from 'react'
import type {ProjectProps} from './project-data'
import ProjectInfo from './ProjectInfo'

type ProjectListProps = {
   //The components takes a parameter that has datatype declared in project-data 
    projectInfo: ProjectProps
}

// The first any is used to specify the type of element that the React component renders. 
// It's saying that this component can return an element of any type.
// The second any specifies that this component can accept props of any type.
export default function ProjectList(props: ProjectListProps): React$Element<any, any> {
    const {projectInfo} = props
    return (
        <ProjectInfo title={projectInfo.title} description={projectInfo.description} type={projectInfo.type} />
    )
}
