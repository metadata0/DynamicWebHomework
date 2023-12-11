import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from 'react-redux';
// import { sequencerStore } from '../../store/slices/sequencerSlice.js'
import { incrementCount, setBPM, resetCount } from '../../store'

export default function Track(props): React$Element<any, any> {
    const { id, bpmRange, isCounting, trackObject, timerIdRef } = props

    const dispatch = useDispatch()

    //interval calculated, stored and managed locally
    // console.log(trackObject)
    const [interval, setInterval] = useState(60000/trackObject.bpm);

    //Reference:
    //https://learnersbucket.com/examples/interview/increment-counter-component-in-react/
    

    //check if it is counting
    useEffect(() => {
        //if it plays
        if(isCounting){
            //start timer
            timerIdRef[id].current = setTimeout(() => {
                //if the beatcount oversteps, reset 
                dispatch(incrementCount(trackObject))
            }, interval);
        }
    
        return () => {
        clearTimeout(timerIdRef[id].current);
        }
    }, [trackObject.beatCount, trackObject.isCounting])

    
    //check if there are any changes
    useEffect(() => {
        setInterval(60000/trackObject.bpm)
    }, [trackObject.bpm])

    //multiply bpm by a factor
    function multiplyBPM(factor){
        const newBPM = trackObject.bpm * factor
        if (newBPM <= bpmRange.max && newBPM >= bpmRange.min){
            setBPM(trackObject, newBPM)
        }
    }


    return (
        <div className="flex flex-row gap-8 bg-slate-100 p-4 border-b-2 border-b-gray-300">   
            <div className="bg-text-3xl font-bold underlinegray-400">Max Step: {trackObject.stepCount}</div>
            <div>Current Beat: {trackObject.beatCount}</div>
            <div>BPM: {trackObject.bpm}</div>
            <button onClick={() => multiplyBPM(2)}>x2</button>
            <button onClick={() => multiplyBPM(0.5)}>/2</button>
        </div>
    )

}
