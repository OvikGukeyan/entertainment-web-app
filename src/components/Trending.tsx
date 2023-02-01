import React from 'react'

const Trending: React.FC = ({trendings}) => {

  return (
    <div className="trending">
          <h2>Trending</h2>
          <div className="slider">
            {trendings.map(obj => (<div className="slide">
              <div className="slide-bookmark">
                <img src="./assets/icon-bookmark-empty.svg" alt="bookmark" />
              </div>
              <img className="slide-img" src={obj.image} alt=" " />
              <div className="slide-info">
                <div className="info">
                  <p>{obj.year} •</p>

                  <img className="info-img" src="./assets/icon-category-movie.svg" alt=" " />
                  <p>{obj.category} •</p>

                  <p>PG</p>
                </div>
                <h3 className="slide-title">{obj.name}</h3>
              </div>
            </div>))}
            
         
          </div>
        </div>
  )
}

export default Trending