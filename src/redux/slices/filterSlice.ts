import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type filtersSliceState = {
    searchValue: string
    category: string
}

const initialState = {
    searchValue: '',
    category: null,
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
        }
    }
});

export const {setSearchValue, setCategory} =  filterSlice.actions;
export const selectFilters = (state: RootState) => state.filters;
export default filterSlice.reducer;
