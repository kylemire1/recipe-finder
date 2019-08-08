import React from 'react';
import Search from '../../Components/Search/Search';

const Hero = ( props ) => (
    <section className="hero">
        <div className="title-container">
            <h1>Hundreds of Recipes at your Fingertips</h1>
            <Search 
                changeHandler={props.changeHandler} 
                searchValue={props.searchValue}
                searchHandler={props.searchHandler}
            />
        </div>
    </section>
);

export default Hero;