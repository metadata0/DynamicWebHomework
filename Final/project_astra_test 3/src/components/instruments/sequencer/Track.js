import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
// import { sequencerStore } from '../../store/slices/sequencerSlice.js'
import { incrementCount, setBPM, onReset } from '../../store'

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

export default function Track(props): React$Element<any, any> {
    const { id, bpmRange, trackObject, timerIdRef } = props;
    const dispatch = useDispatch()

    //interval calculated, stored and managed locally
    const [interval, setInterval] = useState(60000/trackObject.bpm);

    const trackObjects = useSelector((state) => {
        return state.trackObjects
      })

    //Reference:
    //https://learnersbucket.com/examples/interview/increment-counter-component-in-react/

    //check if it is counting
    useEffect(() => {
        // console.log(trackObject.bpm)
        // //if it plays
        let timerId
        if(trackObject.isCounting){
            //start timer
            timerId = setTimeout(() => {
                //if the beatcount oversteps, reset 
                dispatch(incrementCount(trackObject, id))
            }, interval);
        }
    
        return () => {
            // console.log(id)
        clearTimeout(timerId);
        }
    }, [trackObject.beatCount, trackObject.isCounting])

    //check if there are any changes
    // useEffect(() => {
    //     setInterval(60000/trackObject.bpm)
    // }, [trackObject.bpm])

    //multiply bpm by a factor
    function multiplyBPM(factor){
        const newBPM = trackObject.bpm * factor
        // console.log(newBPM)
        if (newBPM <= bpmRange.max && newBPM >= bpmRange.min){
            console.log(newBPM)
            setBPM(trackObject, newBPM)
        }
    }


    return (
        <div id={trackObject.trackId} className="flex flex-row gap-8 bg-slate-100 p-4 border-b-2 border-b-gray-300">   
            <div className="bg-text-3xl font-bold underlinegray-400">Max Step: {trackObject.stepCount}</div>
            <div className='w-40'>Current Beat: {trackObject.beatCount}</div>
            <div>BPM: {trackObject.bpm}</div>
            {/* <button onClick={() => setBPM(trackObject, getRandomInt(70, 180))}>randomize BPM</button> */}
            <button className='bg-sky-500/40 w-10 py-1 rounded-full' 
                    onClick={() => multiplyBPM(2)}>x2</button>
            <button className='bg-sky-500/40 w-10 py-1 rounded-full' 
                    onClick={() => multiplyBPM(0.5)}>/2</button>
        </div>
    )

}
