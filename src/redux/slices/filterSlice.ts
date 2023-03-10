import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type filtersSliceState = {
    searchValue: string
    category: string | null
    currentPage: number
}

const initialState = {
    searchValue: '',
    category: null,
    currentPage: 1
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action) => {
            state.category = action.payload.category
            state.currentPage = action.payload.currentPage
        }
    }
});

export const {setSearchValue, setCategory, setCurrentPage, setFilters} =  filterSlice.actions;
export const selectFilters = (state: RootState) => state.filters;
export default filterSlice.reducer;
