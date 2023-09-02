import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = [
    {
        id: 1,
        decripdion: 'Early protection for your family health',
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere natus sint iure deserunt, perferendis fugit quae debitis ut dolores nostrum excepturi molestiae vel necessitatibus magni eius dolorem ipsam quos obcaecati aut omnis maiores quod at quisquam illo. Aspernatur consectetur, cupiditate vero eos temporibus mollitia ex blanditiis provident animi molestiae soluta id voluptate voluptates ullam earum, obcaecati hic! Debitis nihil voluptatem quibusdam doloribus. Aperiam accusamus itaque nulla aut iste sunt qui repellat corrupti vero animi consequuntur esse voluptate, quidem nam, sed fuga asperiores fugit perspiciatis quos magnam dignissimos temporibus! Cupiditate, eius? Ex at impedit repellendus nulla officia quam distinctio maxime possimus!',
        img: require('../../asset/imge/6.png')
    },
    {
        id: 2,
        decripdion: 'Early protection for your family health',
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere natus sint iure deserunt, perferendis fugit quae debitis ut dolores nostrum excepturi molestiae vel necessitatibus magni eius dolorem ipsam quos obcaecati aut omnis maiores quod at quisquam illo. Aspernatur consectetur, cupiditate vero eos temporibus mollitia ex blanditiis provident animi molestiae soluta id voluptate voluptates ullam earum, obcaecati hic! Debitis nihil voluptatem quibusdam doloribus. Aperiam accusamus itaque nulla aut iste sunt qui repellat corrupti vero animi consequuntur esse voluptate, quidem nam, sed fuga asperiores fugit perspiciatis quos magnam dignissimos temporibus! Cupiditate, eius? Ex at impedit repellendus nulla officia quam distinctio maxime possimus!',
        img: require('../../asset/imge/6.png')
    }, 
    {
        id: 3,
        decripdion: 'Early protection for your family health',
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere natus sint iure deserunt, perferendis fugit quae debitis ut dolores nostrum excepturi molestiae vel necessitatibus magni eius dolorem ipsam quos obcaecati aut omnis maiores quod at quisquam illo. Aspernatur consectetur, cupiditate vero eos temporibus mollitia ex blanditiis provident animi molestiae soluta id voluptate voluptates ullam earum, obcaecati hic! Debitis nihil voluptatem quibusdam doloribus. Aperiam accusamus itaque nulla aut iste sunt qui repellat corrupti vero animi consequuntur esse voluptate, quidem nam, sed fuga asperiores fugit perspiciatis quos magnam dignissimos temporibus! Cupiditate, eius? Ex at impedit repellendus nulla officia quam distinctio maxime possimus!',
        img: require('../../asset/imge/6.png')
    }, 
    {
        id: 4,
        decripdion: 'Early protection for your family health',
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere natus sint iure deserunt, perferendis fugit quae debitis ut dolores nostrum excepturi molestiae vel necessitatibus magni eius dolorem ipsam quos obcaecati aut omnis maiores quod at quisquam illo. Aspernatur consectetur, cupiditate vero eos temporibus mollitia ex blanditiis provident animi molestiae soluta id voluptate voluptates ullam earum, obcaecati hic! Debitis nihil voluptatem quibusdam doloribus. Aperiam accusamus itaque nulla aut iste sunt qui repellat corrupti vero animi consequuntur esse voluptate, quidem nam, sed fuga asperiores fugit perspiciatis quos magnam dignissimos temporibus! Cupiditate, eius? Ex at impedit repellendus nulla officia quam distinctio maxime possimus!',
        img: require('../../asset/imge/6.png')
    },
]

export const reklamSlice = createSlice({
    name: 'reklam',
    initialState: { value: initialStateValue },
    reducers: {
        reklamaction: (state, action) => {
            state.value = action.payload
        }
    }
})

export const reclamReducer = reklamSlice.reducer
export const { reklamaction } = reklamSlice.actions