import React from 'react';
import ContentLoader from 'react-content-loader';


const RecFilmLoader = () => {
  return (
    <ContentLoader 
    speed={2}
    width={280}
    height={226}
    viewBox="0 0 280 226"
    backgroundColor="#10141e"
    foregroundColor="#161d2f"
  >
    <rect x="0" y="0" rx="6" ry="6" width="280" height="174" /> 
    <rect x="0" y="180" rx="6" ry="6" width="150" height="45" />
  </ContentLoader>
  )
}

export default RecFilmLoader