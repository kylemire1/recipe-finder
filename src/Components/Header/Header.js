import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <React.Fragment>
        <header>
            <div className="container">
                <Link className="logo" to="/">RecipeFinder</Link>
            </div> 
        </header>
    </React.Fragment>
);

export default Header;