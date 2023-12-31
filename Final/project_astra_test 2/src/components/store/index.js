import {configureStore} from '@reduxjs/toolkit'
import {incrementCount, setBPM, onStart, onStop, onReset, sequencerReducer } from './slices/sequencerSlice.js'

const store = configureStore({
    reducer: {
        sequencerObjects: sequencerReducer,
        // sequencer

        //add other instruments here
        //add instrument managers that contains array of instruments, used specifically for storing data
    }
});

export {store, incrementCount, setBPM, onStart, onStop, onReset}