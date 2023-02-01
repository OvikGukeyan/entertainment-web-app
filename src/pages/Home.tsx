import React from 'react'
import { SearchBar, Trending, Recomended, Header } from '../components';



const Home: React.FC = () => {
    return (
        <>
            <Header />
            <div className="content">
                <SearchBar />
                <Trending />
                <Recomended />
            </div>
        </>

    )
}

export default Home