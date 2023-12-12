
import React, { useState, useRef, useEffect, createContext, useContext} from "react";

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
    trackId: 1,
    beatCount: 0,
    bpm: 120,
    stepCount: 16,
    isCounting: false,
  },
  {
    trackId: 2,
    beatCount: 0,
    bpm: 140,
    stepCount: 8,
    isCounting: false,
  },
  {
    trackId: 3,
    beatCount: 0,
    bpm: 100,
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