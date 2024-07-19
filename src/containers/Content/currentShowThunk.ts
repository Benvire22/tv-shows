import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from '../../app/store';
import {ShowInfo} from '../../types';
import axiosApi from '../../axiosApi';
import {setCurrentShow} from '../../store/searchSlice';

export const getCurrentShow = createAsyncThunk<void, string, { state: RootState, dispatch: AppDispatch }>(
  'search/getCurrentShow',
  async (id, thunkAPI) => {
    const {data: newShow} = await axiosApi.get<ShowInfo>(`/shows/${id}`);

    if (!newShow) {
      thunkAPI.getState().search.currentShow = null;
    }
    thunkAPI.dispatch(setCurrentShow(newShow));
  }
);
