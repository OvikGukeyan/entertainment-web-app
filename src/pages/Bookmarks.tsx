import React from 'react'
import { useSelector } from 'react-redux';
import { FilmBlock, Header } from '../components';
import { selectBookmarks } from '../redux/slices/bookmarksSlice';

const Bookmarks: React.FC = () => {
  const { bookmarkItems } = useSelector(selectBookmarks)

  return (
    <>
      <Header />
      <div className="recomended">
        <h2>{bookmarkItems.length ? 'Bookmarked': 'You dont have any bookmarks'}</h2>
        <div className="recom-films">
          {bookmarkItems.length && bookmarkItems.map((obj, ind) => <FilmBlock key={ind} {...obj} className={'slide__recom'} />)}
        </div>
      </div>
    </>

  )
}

export default Bookmarks;