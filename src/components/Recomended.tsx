import React from 'react'
import FilmBlock from './Film/FilmBlock'
import RecFilmLoader from './Film/RecFilmLoader'

type RecomendedProps = {
  films: {
    id: number
    image: string
    name: string
    year: number
    category: string
    rating: string
  }[]
}

const Recomended: React.FC<RecomendedProps> = ({films}) => {
  return (
    <div className="recomended">
      <h2>Recommended for you</h2>
      <div className="recom-titles">
     {films.length ? films.map(obj => <FilmBlock {...obj} className={'rec-title'}/>): [...Array(8)].map((_, index) => <RecFilmLoader key={index} />)}
      </div>
    </div>
  )
}

export default Recomended;