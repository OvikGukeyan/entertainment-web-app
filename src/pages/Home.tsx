import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { SearchBar, Trending, Recomended, Header } from '../components';
import { fetchFilms, selectFilms } from '../redux/slices/filmsSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectFilters } from '../redux/slices/filterSlice';

const Home: React.FC = () => {
    const [trendings, setTrendings] = useState([]);
    const {filmsItems, isLoaded} = useSelector(selectFilms);
    const dispatch = useAppDispatch();
    const {searchValue} = useSelector(selectFilters);


    useEffect(() => {
        axios.get('https://63dafdb7b8e69785e479f6d2.mockapi.io/trending')
        .then(res => setTrendings(res.data))
    },[])

    useEffect(() => {
        dispatch(fetchFilms(searchValue))
    },[searchValue])

    


    return (
        <>
            <Header />
            <div className="content">
                <SearchBar />
                <Trending trendings={trendings} isLoaded={isLoaded}/>
                <Recomended films={filmsItems} isLoaded={isLoaded}/>
            </div>
        </>

    )
}


export default Home;