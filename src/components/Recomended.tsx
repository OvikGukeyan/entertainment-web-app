import React from 'react';
import { filmType } from '../redux/slices/filmsSlice';
import {FilmBlock, RecFilmLoader} from '../components';

type RecomendedProps = {
  films: filmType[]
  isLoaded: boolean
}

const Recomended: React.FC<RecomendedProps> = ({films, isLoaded}) => {


  return (
    <div className="recomended">
      <h2>Recommended for you</h2>
      <div className="recom-films">
     {isLoaded ? films.map((obj, ind) => <FilmBlock key={ind} {...obj} className={'slide__recom'}/>): [...Array(8)].map((_, index) => <RecFilmLoader key={index} />)}
      </div>
    </div>
  )
}

export default Recomended;