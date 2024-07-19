import {Link} from 'react-router-dom';

const ToolBar = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="brand-link">Tv Shows</Link>
      </div>
    </header>
  );
};

export default ToolBar;