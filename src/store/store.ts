import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { OnboardingReducer } from "./feature/onboardingslice";
import {doctorReducer} from './feature/doctorSlice'
import { reclamReducer } from "./feature/rekalamSlice";
import {OclockReducer} from './feature/oclockSlice'
import { dermanReducer } from "./feature/dermanSlice";
import { dermanproductReducer } from "./feature/dermanproductSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


  
const rootReducers = combineReducers({
    OnboardingReducer,
    doctorReducer,
    reclamReducer,
    OclockReducer,
    dermanReducer,
    dermanproductReducer

})

export const store = configureStore({
    reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;