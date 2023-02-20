import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { filmType } from "./filmsSlice";



export const fetchTrendings = createAsyncThunk('films/fetchTrendings', async () => {
    const {data} = await axios.get<filmType[]>('https://63dafdb7b8e69785e479f6d2.mockapi.io/trending')
    return data;
});






interface trendingsSliceState {
    trendingsItems: filmType[];
    isLoaded: boolean;
    loadingRejected: boolean;
}


const initialState: trendingsSliceState = {
    trendingsItems: [],
    isLoaded: false,
    loadingRejected: false,
};

const trendingsSlice = createSlice({
    name: 'trendings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrendings.pending, (state) => {
            state.isLoaded = false;
            state.loadingRejected = false;
        });
        builder.addCase(fetchTrendings.fulfilled, (state, action) => {
            state.isLoaded = true;
            state.trendingsItems = action.payload;
        });
        builder.addCase(fetchTrendings.rejected, (state) => {
            state.isLoaded = true;
            state.loadingRejected = true;
        });

    }
});

export const selectTrendings = (state: RootState) => state.trendings
export default trendingsSlice.reducer;