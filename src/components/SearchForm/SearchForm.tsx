import React from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {changeInput, selectValue} from '../../store/searchSlice';
import {getInfo} from './searchThunks';
import Autocomplete from '../Autocomplete/Autocomplete';
import './SearchForm.css';

const SearchForm = () => {
  const searchValue = useAppSelector(selectValue);
  const dispatch = useAppDispatch();

  const changeEvent = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(e.target.value));
    await dispatch(getInfo());
  };

  return (
    <div className="SearchForm">
      <input
        type="search"
        className="SearchForm-field"
        value={searchValue}
        onChange={changeEvent}
        placeholder="Enter show name"
      />
      <Autocomplete/>
    </div>
  );
};

export default SearchForm;