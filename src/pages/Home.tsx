import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { SearchBar, Trending, Recomended, Header, Pagination } from '../components';
import { fetchFilms, selectFilms } from '../redux/slices/filmsSlice';
import { filtersSliceState, selectFilters, setCurrentPage, setFilters } from '../redux/slices/filterSlice';

const Home: React.FC = () => {
    const { filmsItems, isLoaded, loadingRejected } = useSelector(selectFilms);
    const dispatch = useAppDispatch();
    const { searchValue, category, currentPage } = useSelector(selectFilters);
    const isMounted = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        const options: filtersSliceState = { searchValue, category, currentPage }
        dispatch(fetchFilms(options))
    }, [searchValue, category, currentPage, dispatch]);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilters(params))
        }
    }, [dispatch])

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                category,
                currentPage
            }, { skipNulls: true })
            navigate(`/?${queryString}`);
        }
        isMounted.current = true;
    }, [category, currentPage, navigate])

    const onChangePage = (value: number) => {
        dispatch(setCurrentPage(value))
    }


    return (
        <>
            <Header />
            {loadingRejected ? <h2>Something went wrong!!</h2> :
                <div className="content">
                    <SearchBar />
                    <Trending />
                    <Recomended films={filmsItems} isLoaded={isLoaded} />
                    <Pagination onChangePage={onChangePage} currentPage={currentPage} />
                </div>
            }
        </>

    )
}


export default Home;