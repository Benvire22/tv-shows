import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Show, ShowInfo} from "../types";
import { getInfo} from "../components/SearchForm/searchThunks";
import {RootState} from "../app/store";
import {getCurrentShow} from "../containers/Content/currentShowThunk";

export interface SearchState {
    searchValue: string;
    shows: Show[];
    currentShow: ShowInfo | null;
    currentShowLoading: boolean;
    loadingError: boolean;
}

const initialState: SearchState = {
    searchValue: '',
    shows: [],
    currentShow: null,
    currentShowLoading: false,
    loadingError: false,
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        updateShows: (state, action: PayloadAction<Show[]>) => {
            state.shows = action.payload;
        },
        setCurrentShow: (state, action: PayloadAction<ShowInfo>) => {
            state.currentShow = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getInfo.pending, (state) => {
            state.loadingError = false;

        });
        builder.addCase(getInfo.fulfilled, () => {

        });
        builder.addCase(getInfo.rejected, (state) => {
            state.loadingError = true;
        });

        builder.addCase(getCurrentShow.pending, (state) => {
            state.loadingError = false;
            state.currentShowLoading = true;
        });
        builder.addCase(getCurrentShow.fulfilled, (state) => {
            state.currentShowLoading = false;
        });
        builder.addCase(getCurrentShow.rejected, (state) => {
            state.currentShowLoading = false;
            state.loadingError = true;
        });
    }
});

export const searchReducer = searchSlice.reducer;

export const {
    changeInput,
    updateShows,
    setCurrentShow,
} = searchSlice.actions;

export const selectValue = (state: RootState) => state.search.searchValue;
export const selectShows = (state: RootState) => state.search.shows;
export const selectCurrentShow = (state: RootState) => state.search.currentShow;
export const selectLoading = (state: RootState) => state.search.currentShowLoading;
