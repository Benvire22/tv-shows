import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {changeInput, selectShows, selectValue} from "../../store/searchSlice";
import React from "react";
import {getInfo} from "./searchThunks";
import {Link} from "react-router-dom";

const SearchForm = () => {
    const searchValue = useAppSelector(selectValue);
    const shows = useAppSelector(selectShows);
    const dispatch = useAppDispatch();

    const changeEvent = async (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInput(e.target.value));
        await dispatch(getInfo());
    };

    return (
        <div>
            <input type="search" value={searchValue} onChange={changeEvent}/>
            {shows.length > 0  ? (
                shows.map((show) => (
                    <Link to={`/shows/${show.show.id}`} key={show.show.id}>{show.show.name}</Link>
                ))
            ) : null}
        </div>
    );
};

export default SearchForm;