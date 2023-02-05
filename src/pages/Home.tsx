import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { SearchBar, Trending, Recomended, Header } from '../components';
import { fetchFilms, selectFilms } from '../redux/slices/filmsSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
    const [trendings, setTrendings] = useState([]);
    const {filmsItems, isLoaded} = useSelector(selectFilms)
    const dispatch = useAppDispatch()



    useEffect(() => {
        axios.get('https://63dafdb7b8e69785e479f6d2.mockapi.io/trending')
        .then(res => setTrendings(res.data))
    },[])

    useEffect(() => {
        dispatch(fetchFilms())
    },[])

    


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