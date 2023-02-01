import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { SearchBar, Trending, Recomended, Header } from '../components';



const Home: React.FC = () => {
    const [trendings, setTrendings] = useState([]);


    useEffect(() => {
        axios.get('https://63dafdb7b8e69785e479f6d2.mockapi.io/trending')
        .then(res => setTrendings(res.data))
    },[])

    console.log(trendings)

    return (
        <>
            <Header />
            <div className="content">
                <SearchBar />
                <Trending trendings={trendings} />
                <Recomended />
            </div>
        </>

    )
}

export default Home