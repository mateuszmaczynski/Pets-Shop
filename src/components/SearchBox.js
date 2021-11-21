import React, {useState} from 'react';
import './SearchBox.scss';
import searchIcon from '../assets/icons/search.svg';
import {useNavigate} from 'react-router-dom';

const SearchBox = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/name/${name}`);
  }

  return (
    <form className='search' onSubmit={submitHandler}>
      <input
        type='text'
        name='q'
        id='site-search'
        minLength='3'
        maxLength='30'
        className='search__input'
        placeholder='Search product'
        onChange={(e) => setName(e.target.value)}/>
      <button className='search__button' type='submit'>
        <img src={searchIcon} className='search__icon' alt='Search icon'/>
      </button>
    </form>
  )
}

export default SearchBox;