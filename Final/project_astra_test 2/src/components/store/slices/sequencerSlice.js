import {configureStore, createSlice} from '@reduxjs/toolkit'
import { initialPresetObjects } from '../presets/sequencerPreset.js'

//tutorial https://www.youtube.com/watch?v=oeLcLVQtS0M

//reducer function

const sequencerSlice = createSlice({
    name: 'sequencer',
    initialState: initialPresetObjects, 
    reducers: {
        //increment with built-in overstep handler
        incrementCount(state) {
      
            const newCount = state.beatCount + 1;
            const overStep = newCount > state.stepCount;
            // return { ...state, beatCount: overStep ? 1 : newCount }
            if (overStep){
                state.beatCount = 1
            } else {
                state.beatCount = newCount
            }
        },

        // onStart(state) {
        //     state.isCounting = true;
        // },

        // onPause(state) {
        //     state.isCounting = false;
        // },

        // onStop(state, action) {
        //     state.isCounting = false;
        //     clearTimeout(action.payload.current)
        // },

        setBPM(state, action) {
            state.BPM = action.payload;
        },

        resetCount(state, action) {
            state.beatCount = 1;
        }
    }
});

//setting up a configured redux Store
//setting 'sequencer' as the reducer of the store, provided by sequencerSlice



// export  { sequencerStore }
export const { incrementCount, setBPM, resetCount } = sequencerSlice.actions;
export const sequencerReducer = sequencerSlice.reducer


//---------start and stop are managed within the component------
        // startCount(state) {
        //     state.isCounting = true;
        // },

        // stopCount(state) {
        //     state.isCounting = false;
            
        // },
//---------start and stop are managed within the component------