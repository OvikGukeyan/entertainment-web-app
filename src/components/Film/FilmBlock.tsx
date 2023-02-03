import React, {useState} from 'react'

type FilmBlockProps = {
    id: number
    image: string
    name: string
    year: number
    category: string
    rating: string
    className: string
}

const FilmBlock: React.FC<FilmBlockProps> = ({id, image, name, year, category, rating, className}) => {
    const [bookmarked, setBookmarked] = useState(false);

    const togleBookmark = () => {
        setBookmarked(!bookmarked)
    }

    return (
        <div className={className}>
            <div onClick={togleBookmark} className="bookmark">
                <img  src={bookmarked ? "./assets/icon-bookmark-full.svg" : "./assets/icon-bookmark-empty.svg"} alt="bookmark" />
            </div>
            <img className={className === 'rec-title' ? "rec-img" : "slide-img"} src={image} alt=" " />
            <div className={className === 'rec-title' ? '' : "slide-info"}>
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