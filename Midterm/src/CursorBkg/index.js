import * as React from 'react'
import {useState, useEffect, useRef} from 'react'
import styles from './CursorBkg.module.css'


// ref: https://www.youtube.com/watch?v=nvhNp2A3hxI&ab_channel=WebUnlocked
export default function CursorBkg(props) { 
    const {offsetX, offsetY} = props
    const mainCursor = useRef(null)

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event

            const mouseX = clientX - mainCursor.current.clientWidth / 2
            const mouseY = clientY - mainCursor.current.clientHeight / 2

            // console.log(offsetX)
            //center ref to mouse position by applying css style transform
            mainCursor.current.style.transform = `translate3d(${mouseX-offsetX}px, ${mouseY-offsetY}px, 0)`
        })
    }, []);

    return (
        // <div>
            <div className={styles.cursor} ref={mainCursor}/>
        // </div>
    )
}