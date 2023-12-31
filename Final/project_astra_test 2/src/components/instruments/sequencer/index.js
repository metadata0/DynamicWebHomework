
import React, { useState, useRef, useEffect, useReducer} from "react";
import { useDispatch, useSelector, Provider } from 'react-redux';
import Track from "./Track";
import { initialPresetObjects, TrackObjectType } from '../../store/presets/sequencerPreset.js'

import { store } from '../../store'
import { incrementCount, setBPM, onStart, onStop, onReset } from '../../store'



//clocks managed locally within the instrument
//parameters controlled globally using redux

export default function Sequencer(props): React$Element<any, any> {
  
  const dispatch = useDispatch()

  const trackObjects = useSelector((state) => {
    // console.log(state)
    return state.sequencerObjects
  })

  const bpmRange = {
      min:1,
      max:600
  };

  // https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks
  //using a useRef for each track
  //consider replacing them with getElementById in the future for referencing
  //when the sequencer becomes an element that can be called
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const timerIdRef = [ref1, ref2, ref3, ref4];

  //counting state managed locally
  const [isCounting, setIsCounting] = useState(false);

  // functions managed at the sequencer parent layer
  const handleStart = () => {
    dispatch(onStart(trackObjects.isCounting))
  }

  const handlePause = () => {
    dispatch(onStop(trackObjects.isCounting))
  }


  const handleClear = () => {
    dispatch(onStop(trackObjects.isCounting))
    //clear the .current for all timerIdRef
    timerIdRef.map((item) => (
      clearTimeout(item.current)
    ))
  }

  const handleSync = () => {
    dispatch(onReset())
  }

  //The reason why I'm unpacking trackObjects and passing in as arguements is because
  //I wanted each track to have identifying IDs without using nanoid.
  //the children could have centralized access to reach individual tracks
  //but atm it's too much mess to reconfigure the way the reducers and store are set up.

  return (
      <Provider store={store}>
          {/* https://stackoverflow.com/questions/3751520/how-to-generate-sequence-of-numbers-chars-in-javascript */}
          {trackObjects.map((item, index) => (
              <Track id={index} 
              trackObject={trackObjects[index]}
              bpmRange={bpmRange}
              isCounting={isCounting}
              timerIdRef={timerIdRef[index]}
              ></Track>
          ))}
          {/* <Track id={1} stepCount={stepCount}></Track> */}
          
          <button onClick={handleStart}>Play</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleClear}>Stop</button>
          <button onClick={handleSync}>Sync</button>
      </Provider>
      
  )
}
