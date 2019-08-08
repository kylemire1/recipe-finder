import React from 'react';

const Search = ( props ) => (
    <React.Fragment>
        <form onSubmit={props.searchHandler} style={{ position: 'relative' }}>
            <input 
                type='text' 
                placeholder='Search by main ingredient'
                value={props.searchValue}
                onChange={props.changeHandler}
            />
            <button className="search-btn" type="submit"><i className="fas fa-search fa-lg"></i></button>
        </form>
    </React.Fragment>
);

export default Search;