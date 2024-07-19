import {useParams} from "react-router-dom";
import {useCallback, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getCurrentShow} from "./currentShowThunk";
import ShowBlock from "../../components/ShowBlock/ShowBlock";
import {selectLoading, updateShows} from "../../store/searchSlice";

const Content = () => {
    const {showId} = useParams();
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectLoading);

    const getShow = useCallback(async () => {
        if (showId !== undefined) {
            await dispatch(getCurrentShow(showId));
            dispatch(updateShows([]));
        }
    }, [showId, dispatch]);

    useEffect(() => {
        void getShow();
    }, [getShow]);


    return showId ? (
        <>
            {loading ? <h1>Loading</h1> : null}
            <ShowBlock/>
        </>
    ) : (
        <h1>Select something show</h1>
    );
};

export default Content;