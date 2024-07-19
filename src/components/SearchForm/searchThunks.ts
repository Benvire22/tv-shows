import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "../../app/store";
import {ShowInfo} from "../../types";
import axiosApi from "../../axiosApi";
import {updateShows} from "../../store/searchSlice";

export const getInfo = createAsyncThunk<void, void, { state: RootState, dispatch: AppDispatch }>(
    'search/getInfo',
    async (_, thunkAPI) => {
        const value = thunkAPI.getState().search.searchValue;

        const {data: response} = await axiosApi.get<ShowInfo[]>(`/shows?q=${value}`);

        if (!response) {
            thunkAPI.getState().search.shows = [];
        }

        const newShows = response.map((show) => {
            return show;
        });
        thunkAPI.dispatch(updateShows(newShows));
        console.log(thunkAPI.getState().search.shows);
    }
);
