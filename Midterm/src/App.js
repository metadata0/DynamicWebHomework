import React from 'react'
import {useState, useEffect} from 'react'
import './styles/global.css'
import ProjectList from './ProjectList'
import {PROJECT_INFO_LIST} from './ProjectList/project-data'
import CursorBkg from './CursorBkg'

//we're importing the datatype here, so here is where we need to check datatype


function App() {
  //state for light or dark mode
  const [mode, setMode] = useState("dark");

  return (
    //if mode is light, use .light class; otherwise, use .dark class
    <div className={mode=="light" ? "light" : "dark"}>

      <CursorBkg offsetX={0} offsetY={0}/>
      <ProjectList projectData={PROJECT_INFO_LIST}/>
    </div>
  )
}

export default App
