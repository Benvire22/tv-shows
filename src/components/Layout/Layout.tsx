import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ToolBar from '../ToolBar/ToolBar';
import './Layout.css';

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <ToolBar />
      <main className="container">
        <SearchForm/>
        {children}
      </main>
    </>
  );
};

export default Layout;