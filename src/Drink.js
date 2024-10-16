import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

/**
 * Drink component to display details of a single drink.
 * @param {Object} props - The component props.
 * @param {Object} props.items - The list of drinks.
 * @param {string} props.cantFind - The path to redirect if not found.
 */
const Drink = ({ items, cantFind }) => {
    const { id } = useParams();
    const drink = items.find(item => item.id === id);

    if (!drink) {
        return <Redirect to={cantFind} />;
    }

    return (
        <div>
            <h1>{drink.name}</h1>
            <p>{drink.description}</p>
            <p>{`Recipe: ${drink.recipe}`}</p>
            <p>{`Serve: ${drink.serve}`}</p>
        </div>
    );
};

export default Drink;
