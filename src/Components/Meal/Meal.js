import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ( props ) => {
    return (
        <Link to={`/recipe/${props.id}`}>
            <div className="card">
                <img className="meal-image" src={props.image} alt="" />
                <span className="meal-title">{props.title}</span>
            </div>
        </Link>
    );
}

export default Meal;