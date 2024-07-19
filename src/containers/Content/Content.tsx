import {useParams} from "react-router-dom";
import {useCallback, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getCurrentShow} from "./currentShowThunk";
import {selectCurrentShow} from "../../store/searchSlice";
import ShowBlock from "../../components/ShowBlock/ShowBlock";

const Content = () => {
    const {showId} = useParams();
    const dispatch = useAppDispatch();
    const currentShow = useAppSelector(selectCurrentShow);

    const getShow = useCallback(async () => {
        if (showId !== undefined) {
            await dispatch(getCurrentShow(showId));
        }
    }, [showId, dispatch]);

    useEffect(() => {
        void getShow();
    }, [getShow]);


    return currentShow ? (
        <div>
            <ShowBlock />
        </div>
    ) : (
        <h1>Select something show</h1>
    );
};

export default Content;