import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { OnboardingReducer } from "./feature/onboardingslice";
import {doctorReducer} from './feature/doctorSlice'
import { reclamReducer } from "./feature/rekalamSlice";
import {OclockReducer} from './feature/oclockSlice'
const rootReducers = combineReducers({
    OnboardingReducer,
    doctorReducer,
    reclamReducer,
    OclockReducer

})

export const store = configureStore({
    reducer: rootReducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;