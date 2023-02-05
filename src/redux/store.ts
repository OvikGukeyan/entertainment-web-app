import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import films from './slices/filmsSlice';
import filters from './slices/filterSlice';



const store = configureStore({
    reducer: {
        films,
        filters
    }
})

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch ;

export type RootState = ReturnType<typeof store.getState>;
export default store;