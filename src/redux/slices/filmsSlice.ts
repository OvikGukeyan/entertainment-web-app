import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { filtersSliceState } from "./filterSlice";



export const fetchFilms = createAsyncThunk('films/fetchFilms', async ({searchValue, category, currentPage}: filtersSliceState) => {
    const {data} = await axios.get<filmType[]>(`https://63dafdb7b8e69785e479f6d2.mockapi.io/films?${`p=${currentPage}&l=8`}${searchValue ? `&search=${searchValue}` : ''}${category ? `&category=${category}`: ''}`)
    return data;
});



export type filmType = {
    id: number
    image: string
    name: string
    year: number
    category: string
    rating: string
  }


interface filmsSliceState {
    filmsItems: filmType[];
    isLoaded: boolean;
    loadingRejected: boolean;
}


const initialState: filmsSliceState = {
    filmsItems: [],
    isLoaded: false,
    loadingRejected: false,
};

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
            state.isLoaded = false;
            state.loadingRejected = false;
        });
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.isLoaded = true;
            state.filmsItems = action.payload;
        });
        builder.addCase(fetchFilms.rejected, (state) => {
            state.isLoaded = true;
            state.loadingRejected = true;
        });

    }
});

export const selectFilms = (state: RootState) => state.films
export default filmsSlice.reducer;