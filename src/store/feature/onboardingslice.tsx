import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = [
    { id: 1, imge: require('../../asset/imge/2.png'), title: 'Consult only with a doctor you trust' },
    { id: 2, imge: require('../../asset/imge/3.png'), title: 'Find a lot of specialist doctors in one place' },
    { id: 3, imge: require('../../asset/imge/4.png'), title: 'Get connect our Online Consultation' },

]
export const onboardingslice = createSlice({
    name: 'Onboarding',
    initialState:{value:initialStateValue},
    reducers:{
        onboardingaction:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const OnboardingReducer = onboardingslice.reducer
export const {onboardingaction}=onboardingslice.actions