
import React, { useState, useRef, useEffect, createContext, useContext} from "react";
import { nanoid } from 'nanoid'
// @flow


export type TrackObjectType = {|
    isCounting: boolean,
    beatCount: number,
    bpm: number,
    stepCount: number,
    timerIdRef: object
|}

//the less frequently updated 
export const initialPresetObjects: TrackObjectType[] = [
  {
    trackId: nanoid(),
    beatCount: 0,
    bpm: 120,
    stepCount: 16,
    isCounting: false,
  },
  {
    trackId: 2,
    beatCount: 0,
    bpm: 200,
    stepCount: 8,
    isCounting: false,
  },
  {
    trackId: 3,
    beatCount: 0,
    bpm: 170,
    stepCount: 12,
    isCounting: false,
  },
  {
    trackId: 4,
    beatCount: 0,
    bpm: 100,
    stepCount: 12,
    isCounting: false,
  }
];