import React from 'react'
import ContentLoader from 'react-content-loader'

const TrendFilmLoader = () => {
  return (
    <ContentLoader 
    speed={2}
    width={470}
    height={230}
    viewBox="0 0 470 230"
    backgroundColor="#10141e"
    foregroundColor="#161d2f"
  >
    <rect x="0" y="0" rx="6" ry="6" width="470" height="230" />
  </ContentLoader>
  )
}

export default TrendFilmLoader