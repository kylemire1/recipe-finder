import React from 'react';
import Meal from '../../Components/Meal/Meal';

const Results = ( props ) => {
    const { results } = props;

    let meals = null;
    if ( props.loading ) {
        meals = <h4>Loading...</h4>
    } else if ( results ) {
        meals = results.map( result => {
            return (
                <Meal 
                    key={result.idMeal}
                    id={result.idMeal}
                    title={result.strMeal}
                    image={result.strMealThumb}
                />
            );
        });
    }

    let showingResults = '';
    if ( props.queryTerm !== '' && results) {
        showingResults = (
            <div className="container">
                <h2>Showing results for "{props.queryTerm}"</h2>
            </div>
        );
    } else if ( props.queryTerm !== '' && !results ) {
        showingResults = (
            <div className="container">
                <h2>No results for "{props.queryTerm}"</h2>
            </div>
        );
    }

    return (
        <React.Fragment>
            {showingResults}
            <div className="container meals">
                {meals}
            </div>
        </React.Fragment>
    );
}

export default Results;