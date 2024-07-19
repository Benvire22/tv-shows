import './App.css';
import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import Content from './containers/Content/Content';
import NotFound from './containers/NotFound/NotFound';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/shows/:showId" element={<Content/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Layout>
  );
};

export default App;