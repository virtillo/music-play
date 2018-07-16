import React from 'react';

// Header Component. It will include the search input when the prop showSearch is passed.
const Header = (props) => {

    let search;
    if (props.showSearch){
        search = (
            <input 
                onChange={props.handleSearchTermChange} 
                value={props.searchTerm} 
                type="text" 
                placeholder="Search" 
                className="search"
            /> 
        );
    }
    return(
        <header>
            <article className="header content-wrapper">
                <section className="logo">
                    <img src="../img/logo.png" alt="MusicPlay" />
                </section>
                {search}
            </article>
        </header>
    );
};

export default Header;