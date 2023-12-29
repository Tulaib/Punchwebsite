
/*eslint-disable*/
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import apiServices from '../services/requestHandler';
// import LineChart from '../content/DashboardPages/summery/cards/LineChart';

const initialState = {
    bool: true,
};
// export const fetchTodos: any = createAsyncThunk("getTodos", async () => {
//     const res = await apiServices.readTodos()
//     return res
// })


const basicSlce = createSlice({
    name: "basic Slice",
    initialState: initialState,
    reducers: {
        setbool: (state: any, { payload }: any) => {
            state.messageklie = payload
        },
    },
    // extraReducers: {
    //     // [fetchTodos.pending]: (state: any) => {
    //     //     state.loading = true
    //     // },
    //     // [fetchTodos.fulfilled]: (state: any, { payload }: PayloadAction<TPayloadList>) => {
    //     //     state.loading = false
    //     //     state.list = payload
    //     // },
    //     // [fetchTodos.rejected]: (state: any) => {
    //     //     state.loading = false
    //     // }
    // }
})

export const { setbool } = basicSlce.actions
export const basicReducer = basicSlce.reducer