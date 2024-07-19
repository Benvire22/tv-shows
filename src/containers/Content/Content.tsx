import {useCallback, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getCurrentShow} from './currentShowThunk';
import ShowBlock from '../../components/ShowBlock/ShowBlock';
import {selectError, selectLoading, updateShows} from '../../store/searchSlice';
import Spinner from '../../components/Spinner/Spinner';

const Content = () => {
  const {showId} = useParams();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  const getShow = useCallback(async () => {
    if (showId !== undefined) {
      await dispatch(getCurrentShow(showId));
      dispatch(updateShows([]));
    }
  }, [showId, dispatch]);

  useEffect(() => {
    void getShow();
  }, [getShow]);

  return error ? (
    <h1 className="text-center text-danger">Sorry unexpected error was occurred!</h1>
  ) : (
    showId ? (
      <>
        {loading && <Spinner/>}
        <ShowBlock/>
      </>
    ) : (
      <h1 className="text-center text-secondary">Select something show</h1>
    )
  );
};

export default Content;