import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBookmarks, setBookmarkItems } from '../../redux/slices/bookmarksSlice'

type FilmBlockProps = {
    id: number
    image: string
    name: string
    year: number
    category: string
    rating: string
    className: string
}

const FilmBlock: React.FC<FilmBlockProps> = ({ id, image, name, year, category, rating, className }) => {
    const [bookmarked, setBookmarked] = useState(false);
    const dispatch = useDispatch();
    const {bookmarkItems} = useSelector(selectBookmarks);

    const onBookmarkClick = () => {
        setBookmarked(!bookmarked);
        dispatch(setBookmarkItems({ id, image, name, year, category, rating, className }))
    }

    return (
        <div className={className}>
            <div onClick={onBookmarkClick} className="bookmark">
                <img src={bookmarkItems?.find(obj => obj.id === id) ? "./assets/icon-bookmark-full.svg" : "./assets/icon-bookmark-empty.svg"} alt="bookmark" />
            </div>
            <div className='icon-play-wrapper'>
                <div className='icon-play'>
                    <img src="./assets/icon-play.svg" alt=" " />
                    <p>Play</p>
                </div>
            </div>
            
            <img className={className === 'slide__recom' ? "rec-img" : "slide-img"} src={image} alt=" " />
            <div  className="slide-info">
                <div className="info">
                    <p>{year} •</p>

                    <img src="./assets/icon-category-movie.svg" alt=" " />
                    <p>{category} •</p>

                    <p>{rating}</p>
                </div>
                <h3 className="slide-title">{name}</h3>
            </div>
        </div>
    )
}

export default FilmBlock