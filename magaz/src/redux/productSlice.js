import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios'
import {Prod } from "../utils/constans"

export const getProducts = createAsyncThunk (
    'products/getProducts',
    async (_, thunkAPI) =>{
        try{
         const res = await axios(`${Prod}`);
         return res.data;
        } catch(err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
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


export default productsSlice.reducer