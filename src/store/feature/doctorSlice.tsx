import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = [
    {
        id: 1,
        category: 'General',
        detail: {
            name: 'Dr. Marcus ',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...hjasdnakjd asjhbxajskx  sa xjashnxiajk xajsbxajkx ajsbxiuajkhnx xajshnjak ',
            loction: '800m away',
            star: '4.7',
            imge: require('../../asset/imge/21.png'),
            consultation: 60
        },

    },
    {
        id: 2,
        category: 'Lungs',
        detail: {
            name: 'Dr. Maria',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...hjasdnakjd asjhbxajskx  sa xjashnxiajk xajsbxajkx ajsbxiuajkhnx xajshnjak ',
            loction: '700m away',
            star: '3.7',
            imge: require('../../asset/imge/22.png'),
            consultation: 90
        },

    },
     {
        id: 3,
        category: 'Dentist',
        detail: {
            name: 'Dr. Stevi',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...hjasdnakjd asjhbxajskx  sa xjashnxiajk xajsbxajkx ajsbxiuajkhnx xajshnjak ',
            loction: '1.5km away',
            star: '4.9',
            imge: require('../../asset/imge/23.png'),
            consultation: 100
        },

    },
     {
        id: 4,
        category: 'Psychiatrist',
        detail: {
            name: 'Dr. Marcunds',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...hjasdnakjd asjhbxajskx  sa xjashnxiajk xajsbxajkx ajsbxiuajkhnx xajshnjak ',
            loction: '100m away',
            star: '3.5',
            imge: require('../../asset/imge/24.png'),
            consultation: 20
        },

    },
     {
        id: 5,
        category: 'Covid-19',
        detail: {
            name: 'Dr. Horizon',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...hjasdnakjd asjhbxajskx  sa xjashnxiajk xajsbxajkx ajsbxiuajkhnx xajshnjak ',
            loction: '2.5km away',
            star: '4.2',
            imge: require('../../asset/imge/25.png'),
            consultation: 99
        },

    },
     {
        id: 6,
        category: 'Surgeon',
        detail: {
            name: 'Dr. Marit',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...hjasdnakjd asjhbxajskx  sa xjashnxiajk xajsbxajkx ajsbxiuajkhnx xajshnjak ',
            loction: '700m away',
            star: '3.2',
            imge: require('../../asset/imge/21.png'),
            consultation: 60
        },

    }, 
    {
        id: 7,
        category: 'Cardiologis',
        detail: {
            name: 'Dr. Horizon',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...hjasdnakjd asjhbxajskx  sa xjashnxiajk xajsbxajkx ajsbxiuajkhnx xajshnjak ',
            loction: '5.5km away',
            star: '4.9',
            imge: require('../../asset/imge/22.png'),
            consultation: 90
        },

    }
]

export const doctorSlice = createSlice({
    name: 'doctor',
    initialState: { value: initialStateValue },
    reducers: {
        doctoraction: (state, action) => {
            state.value = action.payload
        }
    }
})

export const doctorReducer = doctorSlice.reducer
export const { doctoraction } = doctorSlice.actions