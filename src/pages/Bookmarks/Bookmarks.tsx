import React from 'react'
import { useSelector } from 'react-redux';
import {FilmBlock} from '../../components';
import { selectBookmarks } from '../../redux/slices/bookmarksSlice';

const Bookmarks: React.FC = () => {
    const {bookmarkItems} = useSelector(selectBookmarks)

  return (
    <div className="recomended">
      <h2>Bookmarked Movies</h2>
      <div className="recom-films">
     {bookmarkItems.map(obj => <FilmBlock {...obj} className={'slide__recom'}/>)}
      </div>
    </div>
  )
}

export default Bookmarks;