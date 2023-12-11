
import React, { useState, useRef, useEffect, useReducer} from "react";
import { useDispatch, useSelector, Provider } from 'react-redux';
import Track from "./Track";
import { initialPresetObjects, TrackObjectType } from '../../store/presets/sequencerPreset.js'
import { store } from '../../store'
import { incrementCount, setBPM, resetCount } from '../../store'



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
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const timerIdRef = [ref1, ref2, ref3, ref4];

  //counting state managed locally
  const [isCounting, setIsCounting] = useState(false);

  console.log(trackObjects[1].bpm)

  return (
      <Provider store={store}>
          {/* https://stackoverflow.com/questions/3751520/how-to-generate-sequence-of-numbers-chars-in-javascript */}
          {trackObjects.map((index) => (
              <Track id={index} 
              trackObject={trackObjects[index]}
              bpmRange={bpmRange}
              isCounting={isCounting}
              timerIdRef={timerIdRef[index]}
              ></Track>
          ))}
          {/* <Track id={1} stepCount={stepCount}></Track> */}
          
          {/* <button onClick={onStart}>Start</button>
          <button onClick={onPause}>Start</button>
          <button onClick={onStop}>Stop</button>
          <button onClick={resetAll}>Reset</button> */}
      </Provider>
      
  )
}