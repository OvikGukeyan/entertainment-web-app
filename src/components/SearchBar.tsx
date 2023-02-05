import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/slices/filterSlice';

const SearchBar: React.FC = () => {
  const [serchValueLocal, setSearchValueLocal] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputClear = () => {
    setSearchValueLocal('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValueLocal(e.target.value);
    dispatch(setSearchValue(e.target.value))
  }

  return (
    <div className="search-bar">
      <div className='box'>
        <img src="./assets/icon-search.svg" alt=" " />
        <input ref={inputRef} value={serchValueLocal} onChange={(e) => onInputChange(e)} type="text" placeholder="Search for movies or TV series" />
        {serchValueLocal && <svg onClick={onInputClear} className='clear' height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg" ><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" /></svg>}
      </div>

    </div>
  )
}

export default SearchBar