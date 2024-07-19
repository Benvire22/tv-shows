import {useAppSelector} from "../../app/hooks";
import {selectCurrentShow} from "../../store/searchSlice";
import "./ShowBlock.css";

const ShowBlock = () => {
    const show = useAppSelector(selectCurrentShow);

    return show && (
        <div className="ShowBlock">
            <div className="show-image">
                <img src={show.image.original} alt={show.name}/>
            </div>
            <div className="Show-info">
                <div className="Show-info-top">
                    <h1 className="Show-title">Title: {show.name}</h1>
                    <p className="Show-rating">Rating: <strong>{show.rating.average}</strong></p>
                    <p className="Show-period"><strong>Period:</strong> {show.premiered} - {show.ended}</p>
                </div>
                <div className="Show-info-content">
                    <p className="Show-language"><strong>Language: </strong> {show.language}.</p>
                    <p className="Show-genres"><strong>Genres: </strong> {show.genres.join(', ')}.</p>
                    <p className="Show-weight"><strong>Weight: </strong> {show.weight} series.</p>
                    <p className="Show-runtime"><strong>Runtime: </strong> {show.runtime}.</p>
                </div>
            </div>
        </div>
    );
};

export default ShowBlock;