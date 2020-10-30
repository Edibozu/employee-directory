import React from 'react';
import "./Search.css"

const Search = () => {
    return (
        <div className="search">
            <nav class="navbar navbar-light bg-light">
                <form className="form-inline mx-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    );
};

export default Search;