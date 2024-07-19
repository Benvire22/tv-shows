import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import {Link} from "react-router-dom";
import "./Layout.css";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <>
            <header className="header">
                <div className="container header-container">
                    <Link to="/" className="brand-link">Tv Shows</Link>
                </div>
            </header>
            <main className="container">
                <SearchForm />
                {children}
            </main>
        </>
    );
};

export default Layout;