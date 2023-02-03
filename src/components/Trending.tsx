import React from 'react'
import FilmBlock from './Film/FilmBlock'
import TrendFilmLoader from './Film/TrendFilmLoader'

type TrendingProps = {
  trendings: {
    id: number
    image: string
    name: string
    year: number
    category: string
    rating: string
  }[]
}

const Trending: React.FC<TrendingProps> = ({ trendings }) => {

  return (
    <div className="trending">
      <h2>Trending</h2>
      <div className="slider">
        {trendings.length ? trendings.map(obj => <FilmBlock {...obj} className={'slide'}/>): [...Array(3)].map((_, index) => <TrendFilmLoader key={index} />)}
      </div>
    </div>
  )
}

export default Trending