import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { filmType } from "./filmsSlice";


const getBookmarksFromLS = () => {
    const data = localStorage.getItem('bookmarks');
    const bookmarkItems = data ? JSON.parse(data): [];
    return bookmarkItems
}

type bookmarksSliceState = {
    bookmarkItems: filmType[]
}

const bookmarkItems = getBookmarksFromLS()

const initialState: bookmarksSliceState = {
    bookmarkItems
}

const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        setBookmarkItems: (state, action) => {
            !state.bookmarkItems.find(obj => obj.id === action.payload.id) ?
                state.bookmarkItems.push(action.payload) :
                state.bookmarkItems = state.bookmarkItems.filter(obj => obj.id !== action.payload.id)
        }
    }
});

export const selectBookmarks = (state: RootState) => state.bookmarks;
export const { setBookmarkItems } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;