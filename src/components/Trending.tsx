import React, { useState, useEffect } from 'react';
import { FilmBlock, TrendFilmLoader } from './';
// import axios from 'axios';
import { filmType } from '../redux/slices/filmsSlice';

type TrendingProps = {
  films: filmType[]
  isLoaded: boolean
}

const Trending: React.FC<TrendingProps> = ({ films, isLoaded }) => {
  const [trendings, setTrendings] = useState<filmType[]>([]);

  //   useEffect(() => {
  //     axios.get('https://63dafdb7b8e69785e479f6d2.mockapi.io/trending')
  //     .then(res => setTrendings(res.data))
  // },[])

  useEffect(() => {
    const trend = [];
    while(trend.length < 5) {
      const randomFilm = Math.floor(Math.random() * films.length)
      trend.push(films[randomFilm])
    }
    setTrendings(trend)
    console.log(trend)
  }, [films])



  return (
    <div className="trending">
      <h2>Trending</h2>
      <div className="slider">
        {isLoaded ? trendings.map((obj, ind) => <FilmBlock key={ind} {...obj} className={'slide'} />) : [...Array(3)].map((_, index) => <TrendFilmLoader key={index} />)}
      </div>
    </div>
  )
}

export default Trending