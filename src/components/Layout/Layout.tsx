import React from 'react';
import SearchForm from "../SearchForm/SearchForm";


const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div>
            <header>
                <SearchForm />
            </header>
            {children}
        </div>
    );
};

export default Layout;