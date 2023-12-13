
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

  const sequencerObjects = useSelector((state) => {
    return state.sequencerObjects.data
  })
  const trackObjects = useSelector((state) => {
    return state.trackObjects
  })

  let trackObjectsArray = [trackObjects, trackObjects, trackObjects, trackObjects]

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
    dispatch(onStart(trackObjectsArray))
    // console.log(trackObjectsArray[1])
  }

  const handlePause = () => {
    dispatch(onStop(trackObjectsArray))
    // console.log(trackObjectsArray[1])
  }

  // const handleClear = () => {
  //   dispatch(onReset(sequencerObjects))
  //   //clear the .current for all timerIdRef
  //   trackObjectsArray.map((item) => (
  //     console.log(document.getElementById(item.trackId))
  //     // clearTimeout(getElementById(item.trackId))
  //   ))
  // }

  const handleSync = () => {
    dispatch(onReset(trackObjectsArray))
  }

  //The reason why I'm unpacking sequencerObjects and passing in as arguements is because
  //I wanted each track to have identifying IDs without using nanoid.
  //the children could have centralized access to reach individual tracks
  //but atm it's too much mess to reconfigure the way the reducers and store are set up.

  return (
      <Provider store={store}>
          {/* https://stackoverflow.com/questions/3751520/how-to-generate-sequence-of-numbers-chars-in-javascript */}
          {trackObjectsArray.map((item, index) => (
              <Track id={index} 
              trackObject={trackObjectsArray[index]}
              bpmRange={bpmRange}
              // timerIdRef={timerIdRef[index]}
              ></Track>
          ))}
          
          <div className='flex gap-x-4 px-2 py-2'>
            <button className='bg-yellow-500/40 w-20 py-1 hover:bg-yellow-500/70' onClick={handleStart}>Play</button>
            <button className='bg-red-500/40 w-20 py-1 hover:bg-red-500/70' onClick={handlePause}>Pause</button>
            {/* <button onClick={handleClear}>Stop</button> */}
            <button className='bg-sky-500/40 w-20 py-1 hover:bg-sky-500/70' onClick={handleSync}>Sync</button>
          </div>
      </Provider>
      
  )
}
