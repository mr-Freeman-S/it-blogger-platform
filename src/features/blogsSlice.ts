import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type BlogsType = {
    id: string
    img: string
    title: string
    description: string
}

export type BlogsState = {
    blogs: BlogsType[]
}

const initialState: BlogsState = {
    blogs: [{id: '1', img: 'img', title: 'Title1', description: 'Description'},
        {id: '2', img: 'img', title: 'Title2', description: 'Description'},
        {id: '3', img: 'img', title: 'Title3', description: 'Description'},
        {id: '4', img: 'img', title: 'Title4', description: 'Description'},
    ]
}

export const blogsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.blogs.push({id: '5', img: 'img', title: 'Title5', description: 'Description'})
        },
        decrement: (state) => {
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
        }
    }
})

export const {increment, decrement, incrementByAmount} = blogsSlice.actions

export default blogsSlice.reducer

