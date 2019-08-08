import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

const Recipe = ( props ) => {

    const [ recipe, setRecipe ] = useState({});

    useEffect( () => {
        fetchRecipe(props.match.params.id)
        // eslint-disable-next-line
    }, []);

    const fetchRecipe = async ( id ) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setRecipe(data.meals[0]);
    }

    if( props.search ) {
        return <Redirect to="/"/>;
    }
    
    const recipeArray = Object.values(recipe).splice(9,40);
    const halfArrayLength = Math.floor(recipeArray.length / 2);

    const ingredients = recipeArray.slice(0, halfArrayLength);
    const measures = recipeArray.slice(halfArrayLength, recipeArray.length);

    const ingredientOutput = [];
    for ( let i = 0; i < ingredients.length; i++ ) {
        if ( ingredients[i] !== '' ) {
            ingredientOutput.push(<li key={i}>{measures[i]} {ingredients[i]}</li>);
        }
    }

    return (
        <div className="container">
            <Link className="back" to="/">
                <i className="fas fa-arrow-left"></i> Back to results
            </Link>
            <div className="card recipe">
                <img src={recipe.strMealThumb} alt="" />
                <div className="recipe-instructions">
                    <h2>{recipe.strMeal}</h2>
                    <p>{recipe.strInstructions}</p>
                    {ingredientOutput}
                </div>
            </div>
        </div>
    );
}

export default Recipe;