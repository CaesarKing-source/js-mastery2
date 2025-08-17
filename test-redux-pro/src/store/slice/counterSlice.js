import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 10
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementCountByAmount: (state, action) => {
            if(!isNaN(action.payload)) state.count += action.payload
        } 
    }
});

export const { increment, decrement, incrementCountByAmount } = counterSlice.actions;
export default counterSlice.reducer;