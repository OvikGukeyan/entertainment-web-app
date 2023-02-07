import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { SearchBar, Trending, Recomended, Header, Pagination } from '../components';
import { fetchFilms, selectFilms } from '../redux/slices/filmsSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { filtersSliceState, selectFilters, setCurrentPage } from '../redux/slices/filterSlice';

const Home: React.FC = () => {
    const [trendings, setTrendings] = useState([]);
    const {filmsItems, isLoaded} = useSelector(selectFilms);
    const dispatch = useAppDispatch();
    const {searchValue, category, currentPage} = useSelector(selectFilters);


    useEffect(() => {
        axios.get('https://63dafdb7b8e69785e479f6d2.mockapi.io/trending')
        .then(res => setTrendings(res.data))
    },[])

    useEffect(() => {
        const options: filtersSliceState = {searchValue, category, currentPage}
        dispatch(fetchFilms(options))
    },[searchValue, category, currentPage])

    const onChangePage = (value: number) => {
        dispatch(setCurrentPage(value))
    }


    return (
        <>
            <Header />
            <div className="content">
                <SearchBar />
                <Trending trendings={trendings} isLoaded={isLoaded}/>
                <Recomended films={filmsItems} isLoaded={isLoaded}/>
                <Pagination onChangePage={onChangePage} currentPage={currentPage}/>
            </div>
        </>

    )
}


export default Home;