import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
        {
            id: 1,
            name: 'Comparing the AstraZeneca and Sinovac COVID-19 Vaccines',
            category: "Covid-19",
            price: 'Jun 12, 2021',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus esse reprehenderit doloribus at aliquam doloremque quod quisquam, iste molestias, recusandae blanditiis accusantium mollitia ipsum exercitationem sequi tenetur possimus quaerat ipsa libero laboriosam fugiat similique. Repudiandae commodi magni similique fugit? Minus perferendis, nobis nemo temporibus illum explicabo sed, recusandae alias quo repellat velit soluta doloribus, qui molestias iure. Unde recusandae illo, omnis facilis nemo dolores neque cumque ullam. Mollitia accusantium, perferendis omnis animi at deleniti dignissimos reprehenderit quia sapiente voluptate sint hic temporibus velit tempore ad vero? Quam numquam, sapiente saepe, obcaecati, ad laudantium consequuntur asperiores inventore repellat voluptate illum labore? Quos illo pariatur dolores adipisci nemo eveniet. Quae, repellendus esse cum suscipit sunt eos accusantium accusamus ex quam voluptas. Vero dolor, est vel maxime recusandae corrupti laboriosam sed dolorum ex eos aspernatur quo adipisci suscipit perspiciatis totam debitis sapiente quas repudiandae consequuntur saepe, aperiam et quasi. Eum, quaerat veritatis.',
            imge: require('../../asset/imge/30.jpg'),
            red:'5min read'
        },
        {
            id: 2,
            name: 'The Horror Of The Second Wave Of COVID-19',
            category: "Covid-19",
            price: 'Jun 10, 2021',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus esse reprehenderit doloribus at aliquam doloremque quod quisquam, iste molestias, recusandae blanditiis accusantium mollitia ipsum exercitationem sequi tenetur possimus quaerat ipsa libero laboriosam fugiat similique. Repudiandae commodi magni similique fugit? Minus perferendis, nobis nemo temporibus illum explicabo sed, recusandae alias quo repellat velit soluta doloribus, qui molestias iure. Unde recusandae illo, omnis facilis nemo dolores neque cumque ullam. Mollitia accusantium, perferendis omnis animi at deleniti dignissimos reprehenderit quia sapiente voluptate sint hic temporibus velit tempore ad vero? Quam numquam, sapiente saepe, obcaecati, ad laudantium consequuntur asperiores inventore repellat voluptate illum labore? Quos illo pariatur dolores adipisci nemo eveniet. Quae, repellendus esse cum suscipit sunt eos accusantium accusamus ex quam voluptas. Vero dolor, est vel maxime recusandae corrupti laboriosam sed dolorum ex eos aspernatur quo adipisci suscipit perspiciatis totam debitis sapiente quas repudiandae consequuntur saepe, aperiam et quasi. Eum, quaerat veritatis.',
            imge: require('../../asset/imge/31.jpg'),
            red:'5min read'
        },
        {
            id: 3,
            name: 'The 25 Healthiest Fruits You Can, According to a Nutritionist',
            category: "Diet",
            price: 'Jun 120, 2021',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus esse reprehenderit doloribus at aliquam doloremque quod quisquam, iste molestias, recusandae blanditiis accusantium mollitia ipsum exercitationem sequi tenetur possimus quaerat ipsa libero laboriosam fugiat similique. Repudiandae commodi magni similique fugit? Minus perferendis, nobis nemo temporibus illum explicabo sed, recusandae alias quo repellat velit soluta doloribus, qui molestias iure. Unde recusandae illo, omnis facilis nemo dolores neque cumque ullam. Mollitia accusantium, perferendis omnis animi at deleniti dignissimos reprehenderit quia sapiente voluptate sint hic temporibus velit tempore ad vero? Quam numquam, sapiente saepe, obcaecati, ad laudantium consequuntur asperiores inventore repellat voluptate illum labore? Quos illo pariatur dolores adipisci nemo eveniet. Quae, repellendus esse cum suscipit sunt eos accusantium accusamus ex quam voluptas. Vero dolor, est vel maxime recusandae corrupti laboriosam sed dolorum ex eos aspernatur quo adipisci suscipit perspiciatis totam debitis sapiente quas repudiandae consequuntur saepe, aperiam et quasi. Eum, quaerat veritatis.',
            imge: require('../../asset/imge/32.jpg'),
            red:'5min read'
        },
        {
            id: 4,
            name: 'Traditional Herbal Medicine Treatments for COVID-19',
            category: "Fitness",
            price: 'Jun 12, 2021',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus esse reprehenderit doloribus at aliquam doloremque quod quisquam, iste molestias, recusandae blanditiis accusantium mollitia ipsum exercitationem sequi tenetur possimus quaerat ipsa libero laboriosam fugiat similique. Repudiandae commodi magni similique fugit? Minus perferendis, nobis nemo temporibus illum explicabo sed, recusandae alias quo repellat velit soluta doloribus, qui molestias iure. Unde recusandae illo, omnis facilis nemo dolores neque cumque ullam. Mollitia accusantium, perferendis omnis animi at deleniti dignissimos reprehenderit quia sapiente voluptate sint hic temporibus velit tempore ad vero? Quam numquam, sapiente saepe, obcaecati, ad laudantium consequuntur asperiores inventore repellat voluptate illum labore? Quos illo pariatur dolores adipisci nemo eveniet. Quae, repellendus esse cum suscipit sunt eos accusantium accusamus ex quam voluptas. Vero dolor, est vel maxime recusandae corrupti laboriosam sed dolorum ex eos aspernatur quo adipisci suscipit perspiciatis totam debitis sapiente quas repudiandae consequuntur saepe, aperiam et quasi. Eum, quaerat veritatis.',
            imge: require('../../asset/imge/33.jpg'),
            red:'5min read'
        },
        {
            id: 5,
            name: 'Beauty Tips For Face: 10 Dos and  for Naturally Beautiful Skin',
            category: "Diet",
            price: 'Jun 12, 2021',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus esse reprehenderit doloribus at aliquam doloremque quod quisquam, iste molestias, recusandae blanditiis accusantium mollitia ipsum exercitationem sequi tenetur possimus quaerat ipsa libero laboriosam fugiat similique. Repudiandae commodi magni similique fugit? Minus perferendis, nobis nemo temporibus illum explicabo sed, recusandae alias quo repellat velit soluta doloribus, qui molestias iure. Unde recusandae illo, omnis facilis nemo dolores neque cumque ullam. Mollitia accusantium, perferendis omnis animi at deleniti dignissimos reprehenderit quia sapiente voluptate sint hic temporibus velit tempore ad vero? Quam numquam, sapiente saepe, obcaecati, ad laudantium consequuntur asperiores inventore repellat voluptate illum labore? Quos illo pariatur dolores adipisci nemo eveniet. Quae, repellendus esse cum suscipit sunt eos accusantium accusamus ex quam voluptas. Vero dolor, est vel maxime recusandae corrupti laboriosam sed dolorum ex eos aspernatur quo adipisci suscipit perspiciatis totam debitis sapiente quas repudiandae consequuntur saepe, aperiam et quasi. Eum, quaerat veritatis.',
            imge: require('../../asset/imge/32.jpg'),
            red:'5min read'
        },
        {
            id: 6,
            name: 'Order quickly with Prescription',
            category: "Fitness",
            price: 'Jun 12, 2021',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus esse reprehenderit doloribus at aliquam doloremque quod quisquam, iste molestias, recusandae blanditiis accusantium mollitia ipsum exercitationem sequi tenetur possimus quaerat ipsa libero laboriosam fugiat similique. Repudiandae commodi magni similique fugit? Minus perferendis, nobis nemo temporibus illum explicabo sed, recusandae alias quo repellat velit soluta doloribus, qui molestias iure. Unde recusandae illo, omnis facilis nemo dolores neque cumque ullam. Mollitia accusantium, perferendis omnis animi at deleniti dignissimos reprehenderit quia sapiente voluptate sint hic temporibus velit tempore ad vero? Quam numquam, sapiente saepe, obcaecati, ad laudantium consequuntur asperiores inventore repellat voluptate illum labore? Quos illo pariatur dolores adipisci nemo eveniet. Quae, repellendus esse cum suscipit sunt eos accusantium accusamus ex quam voluptas. Vero dolor, est vel maxime recusandae corrupti laboriosam sed dolorum ex eos aspernatur quo adipisci suscipit perspiciatis totam debitis sapiente quas repudiandae consequuntur saepe, aperiam et quasi. Eum, quaerat veritatis.',
            imge: require('../../asset/imge/30.jpg'),
            red:'5min read'
        },
    ]







export const dermanproductSlice = createSlice({
    name: 'dermanproduct',
    initialState: { value: initialStateValue },
    reducers: {
        dermanproducr: (state, action) => {
            state.value = action.payload
        },
       
    }
})

export const dermanproductReducer = dermanproductSlice.reducer
export const { dermanproducr } = dermanproductSlice.actions