import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'
import { BACE_URL } from "../utils/constans"

export const getProducts = createAsyncThunk (
    'products/getProducts',
    async (_, thunkAPI) =>{
        try{
         const res = await axios(`${BACE_URL}/products`);
         return res.data;
        } catch(err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
);

const productsSlis = createSlice({
    name: 'products',
    initialState: {
        list: [],
        filtered: [],
        related: [],
        isLoading: false
    },
    extraReducers: (builder) =>{
        builder.addCase(getProducts.pending, (state) =>{
            state.isLoading = true
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            console.log('Action Payload:', action.payload); 
            state.list = action.payload;
            state.isLoading = false;
          });
        builder.addCase(getProducts.rejected, (state) =>{
            state.isLoading = false
        });
    },
});


export default productsSlis.reducer