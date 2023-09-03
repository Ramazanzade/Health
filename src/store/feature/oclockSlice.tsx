import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = [
    { id: 1, date:'09:00 AM'},
    { id: 2, date:'10:00 AM'},
    { id: 3, date:'11:00 PM'},
    { id: 4, date:'01:00 PM'},
    { id: 5, date:'02:00 PM'},
    { id: 6, date:'03:00 PM'},
    { id: 7, date:'04:00 PM'},
    { id: 8, date:'07:00 PM'},
    { id: 9, date:'08:00 PM'},
]
export const oclockSlice = createSlice({
    name: 'Onboarding',
    initialState:{value:initialStateValue},
    reducers:{
        ooclockaction:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const OclockReducer = oclockSlice.reducer
export const {ooclockaction}=oclockSlice.actions