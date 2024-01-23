import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'
import { BACE_URL } from "../utils/constans"

export const getCategoris = createAsyncThunk (
    'categoris/getCategoris',
    async (_, thunkAPI) =>{
        try{
         const res = await axios(`${BACE_URL}/categories`);
         return res.data;
        } catch(err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
);

const categorisSlis = createSlice({
    name: 'categoris',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) =>{
        builder.addCase(getCategoris.pending, (state) =>{
            state.isLoading = true
        });
        builder.addCase(getCategoris.fulfilled, (state, action) => {
            console.log('Action Payload:', action.payload); 
            state.list = action.payload;
            state.isLoading = false;
          });
        builder.addCase(getCategoris.rejected, (state) =>{
            state.isLoading = false
        });
    },
});


export default categorisSlis.reducer