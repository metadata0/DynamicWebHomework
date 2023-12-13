import {configureStore} from '@reduxjs/toolkit'
import {incrementCount, setBPM, trackReducer} from './slices/trackSlice.js'
import {onStart, onStop, onReset, sequencerReducer} from './slices/sequencerSlice.js'
const store = configureStore({
    reducer: {
        trackObjects: trackReducer,
        sequencerObjects: sequencerReducer,

        //add other instruments here
        //add instrument managers that contains array of instruments, used specifically for storing data
    }
});

export {store, incrementCount, setBPM, onStart, onStop, onReset}