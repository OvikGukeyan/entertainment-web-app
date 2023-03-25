import React, { useEffect } from 'react';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';

import { FilmBlock, TrendFilmLoader } from './';
import { fetchTrendings, selectTrendings } from '../redux/slices/trendingsSlice';



const Trending: React.FC = () => {
  const dispatch = useAppDispatch();
  const {trendingsItems, isLoaded} = useSelector(selectTrendings);

    useEffect(() => {
      dispatch(fetchTrendings())
  },[dispatch])



  return (
    <div className="trending">
      <h2>Trending</h2>
      <div className="slider">
        {isLoaded ? 
        trendingsItems.map((obj, ind) => <FilmBlock key={ind} {...obj} className='slide' />) 
        : [...Array(3)].map((_, index) => <TrendFilmLoader key={index} />)}
      </div>
    </div>
  )
}

export default Trending