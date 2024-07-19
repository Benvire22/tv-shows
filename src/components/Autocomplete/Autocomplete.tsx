import {Link} from 'react-router-dom';
import {useAppSelector} from '../../app/hooks';
import {selectShows} from '../../store/searchSlice';

const Autocomplete = () => {
  const shows = useAppSelector(selectShows);

  return shows.length > 0 ? (
    <ul className="autocomplete">
      {
        shows.map((show) => (
          <li key={show.show.id}>
            <Link className="autocomplete-item" to={`/shows/${show.show.id}`}>{show.show.name}</Link>
          </li>
        ))
      }
    </ul>
  ) : null;
};

export default Autocomplete;