import {configureStore, createSlice} from '@reduxjs/toolkit'
import { initialPresetObjects } from '../presets/sequencerPreset.js'
import { nanoid } from 'nanoid'




//tutorial https://www.youtube.com/watch?v=oeLcLVQtS0M

const trackSlice = createSlice({
    name: 'sequencer',
    initialState: {
        trackId: nanoid(),
        beatCount: 0,
        bpm: 120,
        stepCount: 16,
        isCounting: true
    },
    reducers: {
        //increment with built-in overstep handler
        //passing in the track index as action.payload
        incrementCount(state) {
            (state.beatCount >= state.stepCount) ? 
            state.beatCount = 1 : 
            state.beatCount = state.beatCount + 1
        },

        //set the bpm of a specific track state
        setBPM(state, action) {
            state.bpm = action.payload;
            console.log('action.payload')
        },
    }
});

//setting up a configured redux Store
//setting 'sequencer' as the reducer of the store, provided by sequencerSlice


// export  { sequencerStore }
export const { incrementCount, setBPM } = trackSlice.actions;
export const trackReducer = trackSlice.reducer
