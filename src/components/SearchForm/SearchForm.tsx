import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {changeInput, selectShows, selectValue} from "../../store/searchSlice";
import React from "react";
import {getInfo} from "./searchThunks";
import {Link} from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
    const searchValue = useAppSelector(selectValue);
    const shows = useAppSelector(selectShows);
    const dispatch = useAppDispatch();

    const changeEvent = async (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInput(e.target.value));
        await dispatch(getInfo());
    };

    return (
        <div className="SearchForm">
            <input type="search" className="SearchForm-field" value={searchValue} onChange={changeEvent}
                   placeholder="Enter show name"/>
            {shows.length > 0 ? (
                <ul className="autocomplete">
                    {
                        shows.map((show) => (
                            <li key={show.show.id}>
                                <Link className="autocomplete-item" to={`/shows/${show.show.id}`}>{show.show.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            ) : null}
        </div>
    );
};

export default SearchForm;