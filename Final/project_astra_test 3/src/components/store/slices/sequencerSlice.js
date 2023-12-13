import {configureStore, createSlice} from '@reduxjs/toolkit'
import { initialPresetObjects } from '../presets/sequencerPreset.js'
import { trackReducer } from './trackSlice.js'
const sequencerSlice = createSlice({
    name: 'sequencer',
    //bear in mind that .map cannot be used on objects, only on arrays
    initialState: [], 
    reducers: {

        //start all tracks in the reducer state
        onStart(state) {
            // console.log("yes")
            // for (let i = 0; i < state.length - 1; i++){
            //     state[i].isCounting = true
            // }
            state.map((item, index) => (
                item.isCounting = true
            ))
        },

        //stop all tracks in the reducer state
        onStop(state) {
            state.map((item, index) => (
                item.isCounting = false
            ))
        },

        onReset(state) {
            state.map((item, index) => (
                item.beatCount = 1
            ))
        }
    }
})

export const { onStart, onStop, onReset } = sequencerSlice.actions;
export const sequencerReducer = sequencerSlice.reducer