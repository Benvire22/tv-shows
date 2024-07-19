import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ShowInfo} from "../types";
import { getInfo} from "../components/SearchForm/searchThunks";
import {RootState} from "../app/store";

export interface SearchState {
    searchValue: string;
    shows: ShowInfo[];
}

const initialState: SearchState = {
    searchValue: '',
    shows: [],
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        updateShows: (state, action: PayloadAction<ShowInfo[]>) => {
            state.shows = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getInfo.pending, () => {

        });
        builder.addCase(getInfo.fulfilled, () => {

        });
        builder.addCase(getInfo.rejected, () => {

        });
    }
});

export const searchReducer = searchSlice.reducer;

export const {
    changeInput,
    updateShows,
} = searchSlice.actions;

export const selectValue = (state: RootState) => state.search.searchValue;
export const selectShows = (state: RootState) => state.search.shows;
