import {configureStore, createSlice} from '@reduxjs/toolkit'
import { initialPresetObjects } from '../presets/sequencerPreset.js'

//tutorial https://www.youtube.com/watch?v=oeLcLVQtS0M

const sequencerSlice = createSlice({
    name: 'sequencer',
    initialState: initialPresetObjects, 
    reducers: {
// --------------------------------------------------------------------------
        //bear in mind that initialPresetObjects is an array structured like:[
            // item{
            //     key: ...
            //     key: ...
            // },
            // item {
            //     key: ...
            //     key: ...
            // }
        // ]

        //need to remember to unpack this array within the slice reducers.
// --------------------------------------------------------------------------

        //increment with built-in overstep handler
        //passing in the track index as action.payload
        incrementCount(state, action) {
            const i = action.payload

            state.map((item, index) => (
                (index === i && item.beatCount >= item.stepCount) ? 
                item.beatCount = 1 :
                item.beatCount = item.beatCount + 1
            ))
            // const newCount = state[index].beatCount + 1;
            // const overStep = newCount > state[index].stepCount;
            // // return { ...state, beatCount: overStep ? 1 : newCount }
            // if (overStep){
            //     state[index].beatCount = 1
            // } else {
            //     state[index].beatCount = newCount
            // }
        },

        //set the bpm of a specific track item
        setBPM(state, action) {
            state.bpm = action.payload;
            console.log('action.payload')
        },

        //start all tracks in the reducer state
        onStart(state) {
            state.map((item, index) => (
                item.isCounting = true
            ))
            // console.log(state)
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
});

//setting up a configured redux Store
//setting 'sequencer' as the reducer of the store, provided by sequencerSlice



// export  { sequencerStore }
export const { incrementCount, setBPM, onStart, onStop, onReset } = sequencerSlice.actions;
export const sequencerReducer = sequencerSlice.reducer


//---------start and stop are managed within the component------
        // startCount(state) {
        //     state.isCounting = true;
        // },

        // stopCount(state) {
        //     state.isCounting = false;
            
        // },
//---------start and stop are managed within the component------