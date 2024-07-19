import React from 'react';
import SearchForm from "../SearchForm/SearchForm";


const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div>
            <header>
                <SearchForm />
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;