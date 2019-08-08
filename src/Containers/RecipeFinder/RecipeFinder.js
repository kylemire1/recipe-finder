import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Hero from '../Hero/Hero';
import Results from '../Results/Results';
import Recipe from '../../Components/Recipe/Recipe';

const RecipeFinder = () => {
    const [ search, setSearch ] = useState('');
    const [ queryTerm, setQueryTerm ] = useState('');
    const [ query, setQuery ] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s');
    const [ meals, setMeals ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect ( () => {
        fetchMeals(query);
    }, [ query ] );

    const fetchMeals = async ( query ) => {
        const response = await fetch ( query );
        const data = await response.json();
        setMeals(data.meals);
        setLoading(false);
    }

    const inputChangedHandler = e => {
        setSearch(e.target.value);
    }

    const formSubmittedHandler = e => {
        e.preventDefault();
        setLoading(true);

        if ( search !== '' ) {
            setQueryTerm(search);
            setQuery(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
        } else {
            setQuery('https://www.themealdb.com/api/json/v1/1/search.php?s');
        }

        setSearch('');
    }

    return (
        <React.Fragment>
            <Header />
            <Hero changeHandler={inputChangedHandler} searchValue={search} searchHandler={formSubmittedHandler} />
            <Route path="/" exact render={(props) => <Results {...props} results={meals} loading={loading} queryTerm={queryTerm}/>}/>
            <Route path="/recipe/:id" render={(props) => <Recipe {...props} search={search} />} />
        </React.Fragment>
    );
}

export default RecipeFinder;